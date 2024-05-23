import {
  Admin,
  Resource,
  // ListGuesser,
  EditGuesser,
  ShowGuesser,
  CustomRoutes,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/People';

import { UserCreate, UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import { Dashboard } from "./Dashboard";
import Settings  from "./Settings";
import Profile  from "./Profile";
import { Route } from "react-router-dom";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    {/* <Resource
      name="customers"
      options={{ label: "Customers" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}
    <Resource
      name="users"
      icon={UserIcon}
      options={{ label: "Users" }}
      create={UserCreate}
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
    />

    <Resource
      name="posts"
      icon={PostIcon}
      list={PostList}
      recordRepresentation="name"
      options={{ label: "Posts" }}
      create={PostCreate}
      edit={PostEdit}
      show={ShowGuesser}
    />
    {/* <Resource
      name="products"
      options={{ label: "Products" }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}

    <CustomRoutes>
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
    </CustomRoutes>
  </Admin>
);
