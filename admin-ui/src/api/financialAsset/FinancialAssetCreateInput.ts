import { CryptoTokenWhereUniqueInput } from "../cryptoToken/CryptoTokenWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";

export type FinancialAssetCreateInput = {
  cryptoToken?: CryptoTokenWhereUniqueInput | null;
  currency?: CurrencyWhereUniqueInput | null;
};
