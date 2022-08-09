import { Currency as TCurrency } from "../api/currency/Currency";

export const CURRENCY_TITLE_FIELD = "id";

export const CurrencyTitle = (record: TCurrency): string => {
  return record.id || record.id;
};
