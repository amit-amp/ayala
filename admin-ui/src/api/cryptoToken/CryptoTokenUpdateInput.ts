import { FinancialAssetWhereUniqueInput } from "../financialAsset/FinancialAssetWhereUniqueInput";

export type CryptoTokenUpdateInput = {
  financialAssets?: FinancialAssetWhereUniqueInput | null;
  value?: string | null;
};
