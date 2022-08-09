import { FinancialAssetWhereInput } from "./FinancialAssetWhereInput";
import { FinancialAssetOrderByInput } from "./FinancialAssetOrderByInput";

export type FinancialAssetFindManyArgs = {
  where?: FinancialAssetWhereInput;
  orderBy?: Array<FinancialAssetOrderByInput>;
  skip?: number;
  take?: number;
};
