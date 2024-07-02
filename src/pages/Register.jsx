import './styles/Register.css'
import React, { useState, useContext } from 'react';
import Navbar from '../components/NavBar'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';



export default function Register() {
    const { token, setToken } = useContext(AuthContext);
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const navigateTo = useNavigate();

    // https://www.baulphp.com/3-formas-para-mostrar-y-ocultar-contrasenas/
    function mostrarContrasena(){
        var tipo = document.getElementById("password");
        var boton = document.getElementById("botonMostrar");
        if(tipo.type == "password"){
            tipo.type = "text";
            boton.textContent = "Hide";
        }else{
            tipo.type = "password";
            boton.textContent = "Show";
        }
    }

    function sendUser(event){
        event.preventDefault();
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/register`, {
            username: username,
            password: password,
            mail: email            
          }).then((response) => {
            console.log('Registro exitoso! Ahora puedes volver y loguearte');
            setError(false);
            setMsg('Registro exitoso! Ahora puedes volver y loguearte');
            const access_token = response.data.access_token;
            setToken(access_token);
            navigateTo('/home');
          }).catch((error) => {      
          console.error('Ocurrió un error:', error);
          setError(true);
          });
        }

    return (
        <>
        <Navbar />
        <form onSubmit={sendUser} className="register-container">
            <label>Username:<input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required/></label>
            <br></br>
            <label>Email:<input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/></label>
            <br></br>
            <div className="password-container">
                <label>Password:<input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required/></label>
                <button type="button" onClick={mostrarContrasena} id='botonMostrar'>Show</button>
            </div>
            <br></br>
            <input type="submit" value="Registrarse"/><br></br>
        </form>
        </>
    )
}