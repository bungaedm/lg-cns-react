import { useState, useEffect } from 'react';
import style from './App.module.css';

export function Counter({ title, initValue }) {
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9999/counter')
      .then(resp => resp.json())
      .then(result => {
        setValue(result.value);
      });
  }, []);

  const up = () => {
    const newValue = value + step;
    setValue(newValue);

    fetch('http://localhost:9999/counter', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: newValue })
    })
      .then(resp => resp.json())
      .then(result => {
        console.log(result.value);
      });

    const newHistory = [...history];
    newHistory.push(newValue);
    setHistory(newHistory);
  };

  const h1Text = { color: 'red', fontSize: '30px' };

  return (
    <div className={style.layout}>
      <h1 style={h1Text}>{title}</h1>
      <input type="number" value={step} onChange={(evt) => {
        setStep(Number(evt.target.value));
      }} />
      <button onClick={up} className='btn'>+</button> {value}
      <ol>
        {history.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
}