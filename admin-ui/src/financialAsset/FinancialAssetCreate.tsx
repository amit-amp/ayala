import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CryptoTokenTitle } from "../cryptoToken/CryptoTokenTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";

export const FinancialAssetCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="cryptotoken.id"
          reference="CryptoToken"
          label="Crypto Token"
        >
          <SelectInput optionText={CryptoTokenTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="Currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
