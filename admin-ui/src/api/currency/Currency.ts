import { FinancialAsset } from "../financialAsset/FinancialAsset";

export type Currency = {
  createdAt: Date;
  financialAssets?: FinancialAsset | null;
  id: string;
  updatedAt: Date;
};
