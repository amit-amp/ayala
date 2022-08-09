import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CRYPTOTOKEN_TITLE_FIELD } from "../cryptoToken/CryptoTokenTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";

export const FinancialAssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Crypto Token"
          source="cryptotoken.id"
          reference="CryptoToken"
        >
          <TextField source={CRYPTOTOKEN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Currency"
          source="currency.id"
          reference="Currency"
        >
          <TextField source={CURRENCY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
