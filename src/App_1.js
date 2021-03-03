import './App.css';
import useState from 'react';

function App() {
  const counter, setCounter = useState(0);
  return (
    <div className="App">
      <h1>Hello Sandbox</h1>
      <div>
        <button>{counter}</button>
      </div> 
    </div>
  );
}

export default App;
