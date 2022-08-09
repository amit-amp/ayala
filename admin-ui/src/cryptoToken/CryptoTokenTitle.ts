import { CryptoToken as TCryptoToken } from "../api/cryptoToken/CryptoToken";

export const CRYPTOTOKEN_TITLE_FIELD = "value";

export const CryptoTokenTitle = (record: TCryptoToken): string => {
  return record.value || record.id;
};
