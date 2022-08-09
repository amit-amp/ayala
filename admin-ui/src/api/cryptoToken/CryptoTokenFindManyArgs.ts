import { CryptoTokenWhereInput } from "./CryptoTokenWhereInput";
import { CryptoTokenOrderByInput } from "./CryptoTokenOrderByInput";

export type CryptoTokenFindManyArgs = {
  where?: CryptoTokenWhereInput;
  orderBy?: Array<CryptoTokenOrderByInput>;
  skip?: number;
  take?: number;
};
