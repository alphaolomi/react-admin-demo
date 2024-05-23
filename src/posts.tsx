// in src/posts.tsx
import { List, Datagrid, TextField, ReferenceField, DateInput, DateField } from "react-admin";

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
      <DateField source="published_at" />
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
      <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" required/>
      <TextInput source="body" multiline rows={5} />
      <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
    </SimpleForm>
  </Create>
);
