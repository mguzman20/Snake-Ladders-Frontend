import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './Routing'

import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'
import Navbar from './components/NavBar'
import AuthProvider from './auth/AuthProvider';
const domain = "dev-zklbwyt66sxm82eo.us.auth0.com";
const clientId = "GHzKPr7WMhzfzcmJjkBxDKUlD75GT2oh";



ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <Routing />
    </AuthProvider>
);

