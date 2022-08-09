import { FinancialAssetWhereUniqueInput } from "../financialAsset/FinancialAssetWhereUniqueInput";

export type CurrencyUpdateInput = {
  financialAssets?: FinancialAssetWhereUniqueInput | null;
  value?: string | null;
};
