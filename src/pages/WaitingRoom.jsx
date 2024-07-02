import './styles/EnterRoom.css'
import Navbar from './../components/NavBar'
import React, { useState, useEffect, useContext } from 'react';
import { Link, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';


export default function WaitingRoom() {
  const { gameId } = useParams();
  const [responseData, setResponseData] = useState(null); // {user_1: null, user_2: null, user_3: null, user_4: null}
  const [playersName, setPlayersName] = useState(null); // [player1, player2, player3, player4]
  const { token } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const config = {
    'method': 'get',
    'url': `${import.meta.env.VITE_BACKEND_URL}/game/obtain/${gameId}`,
    'headers': {
      'Authorization': `Bearer ${token}`
    }
  }
  
  const getPlayersName = {
    'method': 'get',
    'url': `${import.meta.env.VITE_BACKEND_URL}/game/obtainPlayers/${gameId}`,
    'headers': {
    'Authorization': `Bearer ${token}`
    }
  }

  const recibirNombres = () => {
    axios(getPlayersName)
    .then((response) => {
        console.log('nombres recibidos:', response.data);
        setPlayersName(response.data);
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

  useEffect(() => {
    recibirDatos();
    const intervalo = setInterval(recibirDatos, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, [gameId, token]);

  useEffect(() => {
    if (
      responseData &&
      responseData.user_1 !== null &&
      responseData.user_2 !== null &&
      responseData.user_3 !== null &&
      responseData.user_4 !== null
    ) {
      goToGameRoom(gameId);
    }
  }, [
    responseData,
  ]);

  function goToGameRoom(gameId) {
    navigateTo(`/game/${gameId}`);
  }

  return (
    <>
      <Navbar />
      <h2>Waiting Room</h2>
      <h3>Game ID: {gameId}</h3>
      {responseData && (
        <>
          <div className='players'>
            <div>
                <img src="/imgs/ficha1.png" />
                <p>Player 1: {responseData.user_1}</p>
            </div>
            <div>
                <img src="/imgs/ficha2.png" />
                <p>Player 2: {responseData.user_2}</p>
            </div>
            <div>
                <img src="/imgs/ficha3.png" />
                <p>Player 3: {responseData.user_3}</p>
            </div>
            <div>
                <img src="/imgs/ficha4.png" />
                <p>Player 4: {responseData.user_4}</p>
            </div>
          </div>
          {(responseData.user_1 === null || responseData.user_2 === null || responseData.user_3 === null || responseData.user_4 === null) &&
          (<h3>Waiting other players ...</h3>)}

        </>
        )}
    </>
  );
}