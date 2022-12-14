import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { CryptoTokenList } from "./cryptoToken/CryptoTokenList";
import { CryptoTokenCreate } from "./cryptoToken/CryptoTokenCreate";
import { CryptoTokenEdit } from "./cryptoToken/CryptoTokenEdit";
import { CryptoTokenShow } from "./cryptoToken/CryptoTokenShow";
import { FinancialAssetList } from "./financialAsset/FinancialAssetList";
import { FinancialAssetCreate } from "./financialAsset/FinancialAssetCreate";
import { FinancialAssetEdit } from "./financialAsset/FinancialAssetEdit";
import { FinancialAssetShow } from "./financialAsset/FinancialAssetShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ayala"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="CryptoToken"
          list={CryptoTokenList}
          edit={CryptoTokenEdit}
          create={CryptoTokenCreate}
          show={CryptoTokenShow}
        />
        <Resource
          name="FinancialAsset"
          list={FinancialAssetList}
          edit={FinancialAssetEdit}
          create={FinancialAssetCreate}
          show={FinancialAssetShow}
        />
      </Admin>
    </div>
  );
};

export default App;
