import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/User-input";
import Results from "./components/Results";

const INITIAL_VALUES = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration:1
};

function App() {
  const [currentValues, setCurrentValues] = useState(INITIAL_VALUES);
  let isValidInputs = true;

  if(currentValues.duration <=0) isValidInputs = false;

  function handleNewInput(parametrName, newValue){
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
      {!isValidInputs && <p className="center">Put a valid duration data</p>}
      {isValidInputs && <Results currentValues={currentValues}/>}
    </>
  )
}

export default App
