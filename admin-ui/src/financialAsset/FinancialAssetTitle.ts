import { FinancialAsset as TFinancialAsset } from "../api/financialAsset/FinancialAsset";

export const FINANCIALASSET_TITLE_FIELD = "id";

export const FinancialAssetTitle = (record: TFinancialAsset): string => {
  return record.id || record.id;
};
