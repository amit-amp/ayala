import { FinancialAssetWhereUniqueInput } from "../financialAsset/FinancialAssetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CryptoTokenWhereInput = {
  financialAssets?: FinancialAssetWhereUniqueInput;
  id?: StringFilter;
  value?: StringNullableFilter;
};
