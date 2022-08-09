import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CryptoTokenTitle } from "../cryptoToken/CryptoTokenTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";

export const FinancialAssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
