import './styles/Login.css'
import Navbar from '../components/NavBar'
import React, { useState, useContext } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';



export default function Login() {
    const { token, setToken } = useContext(AuthContext);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const navigateTo = useNavigate();
    // https://www.baulphp.com/3-formas-para-mostrar-y-ocultar-contrasenas/
    function mostrarContrasena(){
        var tipo = document.getElementById("password");
        if(tipo.type == "password"){
            tipo.type = "text";
        }else{
            tipo.type = "password";
        }
    }

    function sendUser(event){
        event.preventDefault();
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/login`, {
            username: username,
            password: password
          }).then((response) => {
            console.log('Login successful');
            console.log(response);
            setError(false);
            setMsg("Login exitoso!");
            const access_token = response.data.access_token;
            setToken(access_token);
            console.log("Se seteo el token: ", token);
            navigateTo('/home');
          }).catch((error) => {
            console.error('An error occurred while trying to login:', error);
            console.log(error.response.data);
            setError(error.response.data);
          })

        // navigateTo('/home');
    }

    return (
        <>
        <Navbar />
        <form className="login-container" onSubmit={sendUser}>
            <label>Username:<input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required/></label>
            <br></br>
            <div className="password-container">
                <label>Password:<input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required/></label>
                <button type="button" onClick={mostrarContrasena} id='botonMostrar'>Show</button>
            </div>         
            <input type="submit" value="Ingresar"/><br></br><br></br>
            {error && <h3>{error}</h3>}
        </form>
        </>
    )
}