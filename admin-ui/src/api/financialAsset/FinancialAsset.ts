import { CryptoToken } from "../cryptoToken/CryptoToken";
import { Currency } from "../currency/Currency";

export type FinancialAsset = {
  createdAt: Date;
  cryptoToken?: CryptoToken | null;
  currency?: Currency | null;
  id: string;
  updatedAt: Date;
};
