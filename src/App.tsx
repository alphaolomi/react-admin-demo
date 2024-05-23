import {
  Admin,
  Resource,
  // ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./users";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    {/* <Resource
      name="customers"
      options={{ label: "Customers" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}
    <Resource
      name="users"
      options={{ label: "Users" }}
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    {/* <Resource
      name="products"
      options={{ label: "Products" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}
  </Admin>
);
