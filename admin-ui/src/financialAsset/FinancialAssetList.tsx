import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CRYPTOTOKEN_TITLE_FIELD } from "../cryptoToken/CryptoTokenTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";

export const FinancialAssetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Financial Assets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
