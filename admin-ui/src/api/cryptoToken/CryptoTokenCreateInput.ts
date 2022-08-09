import { FinancialAssetWhereUniqueInput } from "../financialAsset/FinancialAssetWhereUniqueInput";

export type CryptoTokenCreateInput = {
  financialAssets?: FinancialAssetWhereUniqueInput | null;
};
