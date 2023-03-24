import { useState } from 'react';
import './Button.css';
import confetti from "canvas-confetti";

export default function Button({ children }) {

  const [name, setName] = useState('');;

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = (event) => {
    alert(`Me la comes 1-0 ${name} 😛`);
    confetti();
  };

  return (
    <>
      <h1>Hola 😄</h1>
      <div>
        <label>Introduce tu nombre:</label>
      </div>
      <div>
        <input type="text" placeholder='Perico' onChange={handleChange}/>
      </div>
      <button onClick={handleClick} className="button">
        {children}
      </button>
    </>
  )
}