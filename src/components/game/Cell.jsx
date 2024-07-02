import React from "react";
import "./Cell.css";

const Cell = ({jugadores}) => {

    return (
        <div className="cell">
        {jugadores.map((jugador, index) => (
            <img src={'/imgs/ficha' + (jugador.id) + '.png'} className="ficha"/>
        ))}
        </div>
    )
}

export default Cell;