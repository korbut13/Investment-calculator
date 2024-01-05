import { useState } from "react";

export default function Input({label}){
  const [inputValue, setInputValue]=useState(null);
  function handleInput(event){
    setInputValue(_ => event.target.value);
  }
  return (
    <p>
      <label>{label}</label>
      <input type="number" value={inputValue} onChange={handleInput}></input>
    </p>
  )
}
