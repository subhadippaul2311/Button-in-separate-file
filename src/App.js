import React from 'react';
import Button from './Button'; 
import './style.css'

export default function App() {
  const handleClick = () => {
    alert('clicked');
  };
  return (
    <div className="button">
      <Button onClick={handleClick} />
    </div>
  );
}
