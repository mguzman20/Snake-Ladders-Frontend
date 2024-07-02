import './styles/Home.css'
import Navbar from './../components/NavBar'
import React, { useState } from 'react';
import Avatar from '../components/SelectAvatar';
import Button from '../components/Button';
import { useAuth0 } from '@auth0/auth0-react';



export default function Home() {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const { isAuthenticated } = useAuth0();

    function handleAvatarSelect(avatar) {
        setSelectedAvatar(avatar);
    }

    return (
        <>

            <Navbar />

            <h2>¡Que empiece el juego!</h2>
            <div className="home">
            <p>Serpientes y escaleras es un emocionante juego de mesa en el que los 
                jugadores lanzan los dados para avanzar en el tablero y evitan las 
                serpientes que los hacen retroceder. El objetivo es ser el primer 
                jugador en llegar a la casilla final del tablero. Es un juego divertido 
                y fácil de jugar, perfecto para toda la familia. ¡Juega ahora en línea y 
                disfruta de la emoción de serpientes y escaleras desde cualquier parte del mundo!</p>
            </div>
            <div className="display-home">
                <div>
                    <h2>Selecciona tu avatar</h2>
                    <Avatar
                        src="/imgs/batman.png"
                        selected={selectedAvatar === 'avatar1'}
                        onClick={() => handleAvatarSelect('avatar1')}
                    />
                    <Avatar
                        src="/imgs/supergirl.png"
                        selected={selectedAvatar === 'avatar2'}
                        onClick={() => handleAvatarSelect('avatar2')}
                    />

                    <Avatar
                        src="/imgs/superman.png"
                        selected={selectedAvatar === 'avatar3'}
                        onClick={() => handleAvatarSelect('avatar3')}
                    />
                </div>

                <div>
                    <h2>¿Listo para comenzar?</h2>
                    <Button text={"Jugar"}/>
                </div>
            </div>
        </>
    
)
}