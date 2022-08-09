import { CryptoTokenWhereUniqueInput } from "../cryptoToken/CryptoTokenWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";

export type FinancialAssetUpdateInput = {
  cryptoToken?: CryptoTokenWhereUniqueInput | null;
  currency?: CurrencyWhereUniqueInput | null;
};
