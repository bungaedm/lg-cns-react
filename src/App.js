import './App.css';

function Counter(props){
  console.log(props.title);
  return <div>
    <h1>{props.title}</h1>
    <button>+</button> 5
  </div>
}

function App() {
  return (
    <div>
      <Counter title="카운터"/>
      <Counter title="불면증 카운터"/>
    </div>
  );
}

export default App;
