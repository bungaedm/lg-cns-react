import './App.css';
import { Counter } from './Counter';
import Counter3 from './Counter3'

function App() {
  return (
    <div>
      <Counter title="카운터" initValue={2}/>
      <Counter3 title="카운터" initValue={2}/>
    </div>
  );
}

export default App;
