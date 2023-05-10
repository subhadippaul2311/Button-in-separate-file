import React from 'react';
import Button from './Button';

export default function App() {
  const handleClick = () => {
    alert('clicked');
  };
  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
}
