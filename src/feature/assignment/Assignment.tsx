import axios, { AxiosResponse } from "axios";
import { writeBatch, doc } from "firebase/firestore";
import { auth, firestore } from "../../index";
import { Timestamp } from "@firebase/firestore-types";

import { Status, AssetCore } from "../asset/Asset";
import { UserCore } from "../user/User";

import {
  assetCollection,
  assignmentCollection,
  assetStatus
} from "../../shared/const";

export type Assignment = {
  assignmentId: string
  asset?: AssetCore
  user?: UserCore
  dateAssigned?: Timestamp | undefined
  dateReturned?: Timestamp | undefined
  location?: string
  remarks?: string
}

const SERVER_URL = "https://deshi-production.up.railway.app";
export class AssignmentRepository {

  static async create(assignment: Assignment, sender: string): Promise<AxiosResponse<any>> {
    let batch = writeBatch(firestore);

    batch.set(doc(firestore, assignmentCollection, assignment.assignmentId), 
      assignment);

    if (assignment.asset?.assetId !== undefined)
      batch.update(doc(firestore, assetCollection, assignment.asset?.assetId), 
        assetStatus, Status.OPERATIONAL);

    await batch.commit();
    let idToken = await auth.currentUser?.getIdToken(false);

    return await axios.post(`${SERVER_URL}/send-notification`, {
      token: idToken,
      title: "notification_assigned_title",
      body: "notification_assigned_body",
      payload: assignment.assignmentId,
      deviceToken: assignment.user?.deviceToken,
      senderId: auth.currentUser?.uid,
      receiverId: assignment.user?.userId,
      extras: {
        sender: sender,
        target: assignment.asset?.assetName
      }
    })
  }

  static async update(assignment: Assignment, sender: string, previousAssetId: string | undefined, previousUserId: string | undefined): Promise<any> {
    const batch = writeBatch(firestore);

    batch.set(doc(firestore, assignmentCollection, assignment.assignmentId), 
      assignment);

    if (previousAssetId && assignment.asset?.assetId) {
      batch.update(doc(firestore, assetCollection, previousAssetId), 
        assetStatus, Status.IDLE);

      batch.update(doc(firestore, assetCollection, assignment.asset?.assetId), 
        assetStatus, Status.OPERATIONAL);
    }

    if (assignment.user?.userId === previousUserId) {
      return await batch.commit();
    }

    await batch.commit();

    let idToken = await auth.currentUser?.getIdToken(false);
    return await axios.post(`${SERVER_URL}/send-notification`, {
      token: idToken,
      title: "notification_assigned_title",
      body: "notification_assigned_body",
      payload: assignment.assignmentId,
      deviceToken: assignment.user?.deviceToken,
      senderId: auth.currentUser?.uid,
      receiverId: assignment.user?.userId,
      extras: {
        sender: sender,
        target: assignment.asset?.assetName
      }
    })
  }

  static async remove(assignment: Assignment): Promise<any> {
    const batch = writeBatch(firestore);

    batch.delete(doc(firestore, assignmentCollection, assignment.assignmentId));

    if (assignment.asset?.assetId)
      batch.update(doc(firestore, assetCollection, 
        assignment.asset?.assetId), assetStatus, Status.IDLE);

    await batch.commit();
  }
}