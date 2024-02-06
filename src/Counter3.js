import {useState,useEffect} from 'react';

function Counter3({title, initValue}){
    const [value, setValue] = useState(initValue);
    const [step, setStep] = useState(10);
    
    // useEffect(()=>{
    //     fetch('http://localhost:9999/counter')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setValue(data.value);
    //     })
    // },[])

    useEffect(()=>{
        (async () => {
            const res = await fetch('http://localhost:9999/counter')
            const data = await res.json();    
            setValue(data.value);
        })();
    },[])

    function up(){
        setValue(value+step);
    }
    function stepChange(e){
        setStep(Number(e.target.value));
    }

    return <div>
        <h1>{title}</h1>
        <input type="number" value={step} onChange={stepChange} />
        <button onClick={up}>+</button> {value}
    </div>
}

export default Counter3;