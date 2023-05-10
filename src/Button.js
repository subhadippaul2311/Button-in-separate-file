import React from 'react';

export default function Button({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
