import { FinancialAssetWhereUniqueInput } from "../financialAsset/FinancialAssetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CryptoTokenWhereInput = {
  financialAssets?: FinancialAssetWhereUniqueInput;
  id?: StringFilter;
};
