import Navbar from "./NavBar";
import "./Profile.css";
import React, { useState, useEffect, useContext } from 'react';
import {Link, Routes, Route, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';

const Profile = () => {
  const [responseData, setResponseData] = useState(null);
  const [responseDataGame, setResponseDataGame] = useState(null);
  const { token } = useContext(AuthContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    recibirDatos();
    recibirDatos2();
  }, [token]);

  const config = {
    'method': 'get',
    'url': `${import.meta.env.VITE_BACKEND_URL}/user/profile`,
    'headers': {
      'Authorization': `Bearer ${token}`
    }
  }

  const config2 = {
      'method': 'get',
      'url': `${import.meta.env.VITE_BACKEND_URL}/game/inGame`,
      'headers': {
      'Authorization': `Bearer ${token}`
      }
  }

  const recibirDatos2 = () => {
    axios(config2)
      .then((response) => {
        console.log('Datos recibidos:', response.data);
        setResponseDataGame(response.data);
      })
      .catch((error) => {
        console.error('Ocurrió un error al obtener los datos:', error);
      });
  };


  const recibirDatos = () => {
    axios(config)
      .then((response) => {
        console.log('Datos recibidos:', response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error('Ocurrió un error al obtener los datos:', error);
      });
  };

  function goToGameRoom(gameId) {
    navigateTo(`/game/${gameId}`);
}

  return (
    <>
      <Navbar />
      <div>
        <h1>Perfil</h1>

        {responseData && (
          <div class="profile-container">
            <p><strong>ID: </strong>{responseData.id}</p>
            <p><strong>Usuario: </strong>{responseData.username}</p>
            <p><strong>Correo: </strong>{responseData.mail}</p>
            <p><strong>Perfil creado: </strong>{responseData.createdAt}</p>
            <p><strong>Perfil actualizado: </strong>{responseData.updatedAt}</p>
          </div>
        )}
      </div>
      <br></br>
      <h2>Juegos en curso</h2>
      
          <table className="games-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>CreatedAt</th>
                <th>Player 1</th>
                <th>Player 2</th>
                <th>Player 3</th>
                <th>Player 4</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {responseDataGame && responseDataGame.map((game) => (
                <tr key={game.id}>
                  <td>{game.id}</td>
                  <td>{game.createdAt}</td>
                  <td>{game.user_1}</td>
                  <td>{game.user_2}</td>
                  <td>{game.user_3}</td>
                  <td>{game.user_4}</td>
                  <td><button className="button-green-enter-room" variant="contained" onClick={() => goToGameRoom(game.id)}>Ingresar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
    </>
  );
};

export default Profile;
