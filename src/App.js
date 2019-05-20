import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import authClient from './clients/auth';
import {url} from './config/config'

import { UserList, UserCreate, UserEdit, UserIcon } from './routes/users';
import { ConfigList, ConfigCreate, ConfigEdit, ConfigIcon } from './routes/configs';
import { QRList, QRIcon } from './routes/qr';

const App = () => (
    <Admin title="Admin QR Auth" authClient={authClient} restClient={jsonServerRestClient(url)} >
        {permissions => [
            <Resource name="configs" options={{ label: 'Configs' }} list={ConfigList} edit={ConfigEdit} create={ConfigCreate} remove={Delete} icon={ConfigIcon} />,
            <Resource name="qr" options={{ label: 'QRs' }} list={QRList} icon={QRIcon} />,
            <Resource name="users" options={{ label: 'Users' }} list={permissions === "0" ? UserList : null} edit={permissions === "0" ? UserEdit: null} create={permissions === "0" ? UserCreate : null} remove={Delete} icon={UserIcon} />
        ]}
    </Admin>
);

export default App;