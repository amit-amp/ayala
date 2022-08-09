import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FinancialAssetTitle } from "../financialAsset/FinancialAssetTitle";

export const CurrencyEdit = (props: EditProps): React.ReactElement => {
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
      </SimpleForm>
    </Edit>
  );
};
