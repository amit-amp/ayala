import { CryptoTokenWhereUniqueInput } from "../cryptoToken/CryptoTokenWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FinancialAssetWhereInput = {
  cryptoToken?: CryptoTokenWhereUniqueInput;
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
};
