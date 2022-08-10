import { FinancialAssetWhereUniqueInput } from "../financialAsset/FinancialAssetWhereUniqueInput";

export type CurrencyCreateInput = {
  financialAssets?: FinancialAssetWhereUniqueInput | null;
  value?: string | null;
};
