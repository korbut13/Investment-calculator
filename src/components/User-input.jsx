import Input from "./Input";

export default function UserInput({initialValues, handleNewInput}){
  return (
    <section id="user-input">
        <div className="input-group">
          <Input label="Initial investment" initialValue={initialValues.initialInvestment} nameValue="initialInvestment" handleInput={handleNewInput}/>
          <Input label="Annual investment" initialValue={initialValues.annualInvestment} nameValue="annualInvestment" handleInput={handleNewInput}/>
          <Input label="Expected Return" initialValue={initialValues.expectedReturn} nameValue="expectedReturn" handleInput={handleNewInput}/>
          <Input label="Duration" initialValue={initialValues.duration} nameValue="duration" handleInput={handleNewInput}/>
        </div>
    </section>
  )
}
