import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FinancialAssetTitle } from "../financialAsset/FinancialAssetTitle";

export const CryptoTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
