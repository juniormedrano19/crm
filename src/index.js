import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import { Crm } from './Crm';
import { LoginScreen } from './components/auth/LoginScreen';
import { Icon } from '@iconify/react';
import { CrmScreen } from './components/crm/CrmScreen';




ReactDOM.render(

<CrmScreen />
,
  document.getElementById('root')
);

