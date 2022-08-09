import { Currency as TCurrency } from "../api/currency/Currency";

export const CURRENCY_TITLE_FIELD = "value";

export const CurrencyTitle = (record: TCurrency): string => {
  return record.value || record.id;
};
