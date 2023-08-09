import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';
import Header from './Components/Header';

function App() {
  const [userInput  , setUserInput] = useState(null)
  
  const calculateHandler = (userValue) =>{
    setUserInput(userValue)
    console.log(userInput);
  }

  const yearlyData = []; 

  if(userInput){
    let currentSavings = userInput["current-savings"]; 
    const yearlyContribution = userInput["yearly-savings"]; 
    const expectedReturn = userInput["expectd-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyContribution);
  }

  return (
    <div className="App">
      <Header />
     <Form onCalculate={calculateHandler}/>
     {userInput ? <Table data={yearlyData} initalInvestment = {userInput['current-savings']}/>: <h2 style={{textAlign:'center'}}>No Data found</h2> }
    </div>
  );
}

export default App;
