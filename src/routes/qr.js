import React from 'react';
import { List, Datagrid, DateField, TextField, TextInput, SelectInput, ReferenceInput, Filter } from 'admin-on-rest';
import ExploreIcon from 'material-ui/svg-icons/action/explore';

const qrCodeLabel = "QR Code";
const uuidLabel = "UUID";
const createdDateLabel = "Created Date";

export const QRIcon = ExploreIcon;

const QRFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Client Code" source="clientCode" reference="configs">
            <SelectInput optionText="clientCode" />
        </ReferenceInput>
    </Filter>
);

export const QRList = (props) => (
    <List title="QR List" {...props} filters={<QRFilter />}>
        <Datagrid>
            <TextField label={qrCodeLabel} source="qrCode" />
            <TextField label={uuidLabel} source="uuid" />
            <DateField label={createdDateLabel} source="createdDate" locales="fr-FR" />
        </Datagrid>
    </List>
);
