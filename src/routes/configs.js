import React from 'react';
import { List, Edit, Create, Datagrid, DateField, TextField, NumberField, UrlField, ReferenceField, EditButton, DisabledInput, required, SelectInput, NumberInput, SimpleForm, TextInput } from 'admin-on-rest';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const sizeChoices = [
    { id: 50, name: '50' },
    { id: 100, name: '100' },
    { id: 200, name: '200' },
    { id: 400, name: '400' }
];

const clientCodeLabel = "Client Code";
const authURLLabel = "Authenticate URL";
const validateURLLabel = "Validate URL";
const sizeLabel = "Size";
const ttlLabel = "TTL";
const createdByLabel = "Created By";
const createdDateLabel = "Created Date";
const urlRegex = new RegExp(/(?:\b[a-z\d.-]+:\/\/[^<>\s]+|\b(?:(?:(?:[^\s!@#$%^&*()_=+[\]{}|;:'",.<>/?]+)\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]))(?:[;/][^#?<>\s]*)?(?:\?[^#<>\s]*)?(?:#[^<>\s]*)?(?!\w))/gi);

const validURL = value => value.match(urlRegex) ? undefined : 'Valid URL required';

export const ConfigIcon = SettingsIcon;

export const ConfigList = (props) => (
    <List title="Config List" {...props}>
        <Datagrid>
            <TextField label={clientCodeLabel} source="clientCode" />
            <UrlField label={authURLLabel} source="authURL" />
            <UrlField label={validateURLLabel} source="validateURL" />
            <NumberField label={sizeLabel} source="size" />
            <NumberField label={ttlLabel} source="ttl" />
            <ReferenceField label={createdByLabel} source="createdBy" reference="users">
                <TextField source="username" />
            </ReferenceField>
            <DateField label={createdDateLabel} source="createdDate" locales="fr-FR" />
            <EditButton />
        </Datagrid>
    </List>
);

const ConfigTitle = ({ record }) => {
    return <span>Edit Config: {record ? `"${record.clientCode}"` : ''}</span>;
};

export const ConfigEdit = (props) => (
    <Edit title={<ConfigTitle />} {...props}>
        <SimpleForm redirect="show">
            <DisabledInput label={clientCodeLabel}  source="clientCode" />
            <TextInput label={authURLLabel} source="authURL" validate={[required, validURL]} />
            <TextInput label={validateURLLabel} source="validateURL" validate={[required, validURL]} />
            <SelectInput label={sizeLabel} source="size" choices={sizeChoices} defaultValue={50} validate={required} />
            <NumberInput label={ttlLabel} source="ttl" validate={required} />
            <ReferenceField label={createdByLabel} source="createdBy" reference="users" linkType={false} >
                <TextField source="username" />
            </ReferenceField>
        </SimpleForm>
    </Edit>
);

export const ConfigCreate = (props) => (
    <Create title="Create Config" {...props}>
        <SimpleForm redirect="show">
            <TextInput label={clientCodeLabel} source="clientCode" validate={required} />
            <TextInput label={authURLLabel} source="authURL" validate={[required, validURL]} />
            <TextInput label={validateURLLabel} source="validateURL" validate={[required, validURL]} />
            <SelectInput label={sizeLabel} source="size" choices={sizeChoices} defaultValue={50} validate={required} />
            <NumberInput label={ttlLabel} source="ttl" defaultValue="0" validate={required} />
            <TextField label={''} source="createdBy" defaultValue={localStorage.getItem('id')} />
        </SimpleForm>
    </Create>
);
