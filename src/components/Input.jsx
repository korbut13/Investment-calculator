export default function Input({label, initialValue, nameValue, handleInput}){
   return (
    <p>
      <label>{label}</label>
      <input type="number" value={initialValue} onChange={(event) => handleInput(nameValue, Number(event.target.value))} required></input>
    </p>
  )
}
