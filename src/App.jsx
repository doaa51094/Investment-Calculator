import { useState } from "react";
import { Results } from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: +newValue };
    });
    console.log(userInput);
  }
  return (
    <>
   <UserInput onChangeInput={handleChange} userInput={userInput}/>
   <Results userInput={userInput}/>
    </>
  );
}

export default App;
