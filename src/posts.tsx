// in src/posts.tsx
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Create,
} from "react-admin";

export const PostList = () => (
  <List
    filters={[
    //   <TextInput source="q" label="Search" alwaysOn />,
    //   <ReferenceInput source="userId" label="User" reference="users" />,
    ]}
  >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField
        source="userId"
        reference="users"
        label="User"
        link="show"
      />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
