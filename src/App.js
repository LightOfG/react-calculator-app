import {useState} from 'react';
import {AllButtons} from './AllButtons.js'
import { Display } from './Display.js';
import Heading from './Heading.js';


function App() {

  const[result, setResult] = useState(0);
  const[calculation, setCalculation]= useState(0);

  const onChange = e => {
  // I am holding number in input in the calculation.
    setCalculation(e.target.value);    
  }

  const operation = opeationSymbol =>{
    //I set results with using calculation element.
    if(opeationSymbol=='+'){
      setResult(result+ parseFloat( calculation));
    }
    else if(opeationSymbol=='-'){
      setResult(result - parseFloat( calculation));
    }
    else if(opeationSymbol=='*'){
      setResult(result * parseFloat( calculation));
    }
    else if(opeationSymbol=='/'){
      setResult(result / parseFloat( calculation));
    }
  }

  const resetResultButton = () => {
    setResult(0);
  }

  const resetInputButton = () => {
    setCalculation(0)
  }

  return (
   
    <div className="App">
       <div className="calculator">
        <Heading />
     
        <Display onChange={onChange} calculation={calculation} result={result} />
        
        <AllButtons operation={operation} resetResultButton={resetResultButton} resetInputButton={resetInputButton}/>
        
      </div>
      </div>
  );
}

export default App;
