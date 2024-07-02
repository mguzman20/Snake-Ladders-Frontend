import React from 'react';
import "./Button.css";

export default function ButtonDice({text, onClick})  {  
    return (
      <button className="button-green" onClick={onClick}>
        {text}
      </button>
    );
  }