import React from 'react';
import { List, Edit, Create, Datagrid, TextField, SelectField, SelectInput, DateField, EmailField, EditButton, DisabledInput, required, email, SimpleForm, TextInput } from 'admin-on-rest';
import GroupIcon from 'material-ui/svg-icons/social/group';

export const UserIcon = GroupIcon;

const fullNameLabel = "Full Name";
const usernameLabel = "Username";
const passwordLabel = "Password";
const emailLabel = "Email";
const roleLabel = "Role";
const createdDateLabel = "Created Date";
var strongPassRegex = new RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^.&*])[\w!@#$.%^&*]{8,}$/);

const validPass = value => value.match(strongPassRegex) ? undefined : 'Valid password must / ' +
    'Contain at least 1 lowercase alphabetical character / ' +
    'Contain at least 1 uppercase alphabetical character / ' +
    'Contain at least 1 numeric character / ' +
    'Contain at least one special character(!@#$.%^&*) / ' +
    'Be eight characters or longer';

const roleChoices = [
    { _id: 0, role: 'Admin' },
    { _id: 1, role: 'User' }
];

export const UserList = (props) => (
    <List title="User List" {...props}>
        <Datagrid>
            <TextField label={usernameLabel} source="username" />
            <TextField label={fullNameLabel} source="fullName" />
            <EmailField label={emailLabel} source="email" />
            <SelectField label={roleLabel} source="role" choices={roleChoices} optionText="role" optionValue="_id" />
            <DateField label={createdDateLabel} source="createdDate" locales="fr-FR" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>Edit User: {record ? `"${record.username}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm redirect="show">
            <DisabledInput label={usernameLabel} source="username" validate={required} />
            <TextInput label={fullNameLabel} source="fullName" validate={required} />
            <TextInput label={emailLabel} source="email" validate={[required, email]}/>
            <SelectInput label={roleLabel} source="role" choices={roleChoices} optionText="role" optionValue="_id" validate={required} />
            <DateField label={createdDateLabel} source="createdDate" locales="fr-FR" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Create New User" {...props}>
        <SimpleForm redirect="show">
            <TextInput label={usernameLabel} source="username" validate={required} />
            <TextInput label={fullNameLabel} source="fullName" validate={required} />
            <TextInput label={passwordLabel} source="password" validate={[required, validPass]} />
            <TextInput label={emailLabel} source="email" validate={[required, email]}/>
            <SelectInput label={roleLabel} source="role" choices={roleChoices} optionText="role" optionValue="_id" validate={required} />
        </SimpleForm>
    </Create>
);
