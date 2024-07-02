import React, {useContext, useState} from 'react';
import './styles/Logout.css';
import { AuthContext } from '../auth/AuthContext';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


const LogoutButton = () => {
    const navigateTo = useNavigate();
  const {logout} = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  const handleLogout = () => {
    logout();
    setMsg("Has hecho logout con éxito!")
    navigateTo('/')
    window.location.reload();
  }

  return (
    <>
        <button onClick={handleLogout} className='navbar-button'>
        Cerrar sesión
        </button>
    </>
  );
}

export default LogoutButton;