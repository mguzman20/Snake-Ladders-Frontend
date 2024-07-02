import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-element">
            <div className="slider-content">
                <h2>Contiene los siguientes elementos:</h2>
                <ul>
                    <li>Un tablero enumerado del 1 al 100</li>
                    <li>Un dado</li>
                    <li>Fichas de jugadores</li>
                </ul>
            </div>
            <img src="/imgs/fichas3.png"/>
          </div>
          <div className="slider-element">
            <div className="slider-content">
                <h2>Inicio del juego</h2>
                <p>Antes de partir el juego cada integrante tiene que tirar el dado, y el que obtine el numero mayor es el jugador que inicia. Luego se sigue el orden predefinido</p>
            </div>
            <img src="/imgs/dados_ejemplo.png"/>
          </div>

          <div className="slider-element">
            <div className="slider-content">
                <h2>Como jugar</h2>
                <p>Al inicar el turno se tiene que tirar el dado y luego se mueve la ficha correspondiente al jugador
                    la cantidad de unidades que indica el dado, avanzando encima del tablero
                </p>
            </div>
            <img src="/imgs/Tablero1.jpg"/>
          </div>

          <div className="slider-element">
            <div className="slider-content">
                <h2>Reglas del juego</h2>
                <p>En el juego existen dos elementos especiales, las serpientes y las escaleras</p>
                <p>Cuando un jugador cae en la cabeza de una serpiente, tiene que bajar por la serpiente hasta la casilla que esta en su cola</p>
                <p>Cuando un jugador cae en el inicio de una escalera, sube por la escalera y se ubica en la casilla que esta en la parte superior de la escalera</p>
            </div>
            <img src="/imgs/SerpientesEscaleras.png"/>
          </div>

          <div className="slider-element">
            <div className="slider-content">
                <h2>Final del juego</h2>
                <p>El primer jugador en llegar a la ultima casilla, la numero 100, es el ganador</p>
            </div>
            <img src="/imgs/Tablero3.jpeg"/>
          </div>
        </Slider>
      </div>
    );
  }
}