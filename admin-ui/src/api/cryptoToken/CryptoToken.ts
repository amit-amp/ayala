import { FinancialAsset } from "../financialAsset/FinancialAsset";

export type CryptoToken = {
  createdAt: Date;
  financialAssets?: FinancialAsset | null;
  id: string;
  updatedAt: Date;
  value: string | null;
};
