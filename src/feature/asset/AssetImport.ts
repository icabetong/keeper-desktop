import { Asset } from "./Asset";

export type AssetImport = Asset & {
  status: "exists" | "duplicate" | "absent"
}