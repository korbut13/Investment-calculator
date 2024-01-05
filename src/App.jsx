import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/User-input";
import Results from "./components/Results";

import { calculateInvestmentResults } from "./util/investment";

const INITIAL_VALUES = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration:1
};

function App() {
  const [currentValues, setCurrentValues] = useState(INITIAL_VALUES);
  const results = calculateInvestmentResults(currentValues);

  function handleNewInput(parametrName, newValue){
    console.log("value", newValue)
    setCurrentValues(prevValues => {
      return {
        ...prevValues,
        [parametrName]:newValue
      }
    })
  }

  return (
    <>
      <Header/>
      <UserInput initialValues={currentValues} handleNewInput={handleNewInput}/>
      <Results results={results} initialInvestment={currentValues.initialInvestment} annualInvestment={currentValues.annualInvestment}/>
    </>

  )
}

export default App
