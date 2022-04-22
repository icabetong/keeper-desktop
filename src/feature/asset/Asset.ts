import { doc, increment, writeBatch } from "firebase/firestore";
import { firestore } from "../../index";

import { CategoryCore } from '../category/Category';
import { assetCollection, categoryCollection, categoryCount } from "../../shared/const";

export type Asset = {
  stockNumber: string,
  description?: string,
  category?: CategoryCore,
  subcategory?: string,
  unitOfMeasure?: string,
  unitValue: number,
  remarks?: string,
}

export class AssetRepository {

  static async create(asset: Asset): Promise<void> {
    let batch = writeBatch(firestore);

    batch.set(doc(firestore, assetCollection, asset.stockNumber), asset);

    let id = asset.category?.categoryId;
    if (id) {
      batch.update(doc(firestore, categoryCollection, id),
        categoryCollection, increment(1));
    }

    return await batch.commit()
  }

  static async update(asset: Asset, previousCategoryId?: string): Promise<void> {
    let batch = writeBatch(firestore);
    batch.set(doc(firestore, assetCollection, asset.stockNumber), asset)

    let currentCategoryId = asset.category?.categoryId;
    if (previousCategoryId && currentCategoryId && currentCategoryId !== previousCategoryId) {
      batch.update(doc(firestore, categoryCollection, currentCategoryId), categoryCount,
        increment(1))

      batch.update(doc(firestore, categoryCollection, previousCategoryId), categoryCount,
        increment(-1))
    }

    return batch.commit()
  }

  static async remove(asset: Asset): Promise<void> {
    let batch = writeBatch(firestore);

    batch.delete(doc(firestore, assetCollection, asset.stockNumber));

    let categoryId = asset.category?.categoryId;
    if (categoryId) {
      batch.update(doc(firestore, categoryCollection, categoryId), categoryCount, increment(-1));
    }

    return await batch.commit();
  }
}

