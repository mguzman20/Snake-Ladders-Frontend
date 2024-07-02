import React from 'react';
import "./Button.css";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function Button({ text}) {
    const navigateTo = useNavigate();
    const manejarClick = () => {
      console.log('Click start');
      // redirect to /game
      navigateTo('/enterRoom');

    }
  
    return (
      <button className="button-green" variant="contained" onClick={manejarClick}>
        {text}
      </button>
    );
  }