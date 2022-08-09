import { CryptoToken as TCryptoToken } from "../api/cryptoToken/CryptoToken";

export const CRYPTOTOKEN_TITLE_FIELD = "id";

export const CryptoTokenTitle = (record: TCryptoToken): string => {
  return record.id || record.id;
};
