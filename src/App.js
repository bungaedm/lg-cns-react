import './App.css';
import {useState} from 'react';

function Counter({title, initValue}){
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  return (
    <div>
      <h1>{title}</h1>
      <input type="number" value={step} onChange={(evt)=>{
        setStep(Number(evt.target.value));
      }}/>
      <button onClick={() => {
        setValue(value+step);
        setHistory([...history, value+step]);
      }}>+</button> {value}
      <ol>{history.map(item=><li>{item}</li>)}</ol>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter title="카운터" initValue={2}/>
      {/* <Counter title="불면증 카운터" initValue={4}/> */}
    </div>
  );
}

export default App;
