import './styles/EnterRoom.css'
import Navbar from './../components/NavBar'
import React, { useState, useEffect, useContext } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';




export default function EnterRoom() {

    const navigateTo = useNavigate();
    const [responseData, setResponseData] = useState(null);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        recibirDatos();
    }, [token]);

    const config = {
        'method': 'get',
        'url': `${import.meta.env.VITE_BACKEND_URL}/game/pregame`,
        'headers': {
        'Authorization': `Bearer ${token}`
        }
    }

    const configPost = {
      'method': 'post',
      'url': `${import.meta.env.VITE_BACKEND_URL}/game/`,
      'headers': {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
      },
      'data': {
        "game_finished": false,
        "user_1": null,
        "user_2": null,
        "user_3": null,
        "user_4": null,
        "player_turn": 1,
        "position_1": 1,
        "position_2": 1,
        "position_3": 1,
        "position_4": 1
    }
  }
  
    function goToWaitingRoom(gameId) {
      const config_1 = {
        'method': 'get',
        'url': `${import.meta.env.VITE_BACKEND_URL}/game/addPlayer/${gameId}`,
        'headers': {
        'Authorization': `Bearer ${token}`
        }
      }
      const recibirDatos_1 = () => {
        axios(config_1)
        .then((response) => {
            console.log('Datos recibidos:', response.data);
            setResponseData(response.data);
        })
        .catch((error) => {
            console.error('Ocurrió un error al obtener los datos:', error);
        });
      };
      recibirDatos_1();
      navigateTo(`/waitingRoom/${gameId}`);
    }

    function createRoom() {
      axios(configPost)
      .then((response) => {
          console.log('Datos recibidos:', response.data);
          goToWaitingRoom(response.data.id);
      }
      )
    }


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

    return (
        <>
          <Navbar />
          <div className="enter-room">
            <div>
            <h2>Selecciona el juego al cual deseas ingresar</h2>
      
            <table className="games-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Player 1</th>
                  <th>Player 2</th>
                  <th>Player 3</th>
                  <th>Player 4</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {responseData && responseData.map((game) => (
                  <tr key={game.id}>
                    <td>{game.id}</td>
                    <td>{game.user_1}</td>
                    <td>{game.user_2}</td>
                    <td>{game.user_3}</td>
                    <td>{game.user_4}</td>
                    <td><button className="button-green-enter-room" variant="contained" onClick={() => goToWaitingRoom(game.id)}>Ingresar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div>
              <h2>O crea uno nuevo</h2>
              <button className="button-green-enter-room" variant="contained" onClick={() => createRoom()}>Crear</button>
            </div>
          </div>
          
          
          
        </>
      );
}