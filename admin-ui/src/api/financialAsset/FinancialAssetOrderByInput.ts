import { SortOrder } from "../../util/SortOrder";

export type FinancialAssetOrderByInput = {
  createdAt?: SortOrder;
  cryptoTokenId?: SortOrder;
  currencyId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
