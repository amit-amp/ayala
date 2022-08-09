import { FinancialAssetWhereUniqueInput } from "../financialAsset/FinancialAssetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CurrencyWhereInput = {
  financialAssets?: FinancialAssetWhereUniqueInput;
  id?: StringFilter;
};
