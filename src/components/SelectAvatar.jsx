import './SelectAvatar.css';
import React, { useState } from 'react';

export default function Avatar({ src, selected, onClick }) {
    function handleSelect() {
      if (selected) {
        onClick(null);
      } else {
        onClick(src);
      }
    }
  
    return (
      <img
        src={src}
        className={`avatar ${selected ? 'selected' : ''}`}
        onClick={handleSelect}
      />
    );
  }