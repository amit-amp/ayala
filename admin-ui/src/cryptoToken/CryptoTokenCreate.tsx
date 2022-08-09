import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FinancialAssetTitle } from "../financialAsset/FinancialAssetTitle";

export const CryptoTokenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="financialasset.id"
          reference="FinancialAsset"
          label="Financial Assets"
        >
          <SelectInput optionText={FinancialAssetTitle} />
        </ReferenceInput>
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
