import "./NavBar.css"
import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "../auth/AuthContext";
import LogoutButton from "./../pages/Logout";
import axios from "axios";

function Navbar() {
    const { token, setToken } = useContext(AuthContext);
    const urlPage = new URL(import.meta.url);
    const urlLogo = `${urlPage.origin}/imgs/logo.png`;


  return (
    <header>
        <nav className="navbar">
            <div className="left-elements">
                
                <NavLink to="/" className="navbar-link">
                    <img src={urlLogo} alt="logo-image" className="logo-image" />
                </NavLink> 

                
                {token != "null" && (
                    <NavLink to="/home" className={({ isActive }) => isActive ? "navbar-link-active" : "navbar-link"}>
                    Jugar
                    </NavLink>
                )}
                
                <NavLink to="/instructions" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-link"}>
                    Reglas
                </NavLink>
                
                <NavLink to="/about_us" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-link"}>
                    Acerca De
                </NavLink>
            </div>
            <div className="right-elements">

                {token == "null" && (
                    <NavLink to="/login" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-button"}>
                        Iniciar Sesión
                    </NavLink>
                )}

                {token == "null" && (
                    <NavLink to="/register" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-button"}>
                        Registrarse
                    </NavLink>
                )}

                {token != "null" && (
                    <NavLink to="/profile" className={({ isActive }) => isActive ? "navbar-link-active" : "navbar-button"}>
                        Perfil
                    </NavLink>
                    
                )}

                {token != "null" && (
                    <LogoutButton />
                )}
                
            </div>

        </nav>
    </header>
  )
}

export default Navbar;