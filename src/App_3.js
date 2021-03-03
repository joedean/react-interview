import React from 'react';
import './App.css';
import axios = require('axios').default;

const {useState} = React;

// https://randomuser.me/api

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className='App'>
      <h1>Hello Sandbox</h1>
      <div>
        <p>
          {counter}
        </p>
        <button onClick={() => {
          setCounter(counter + 1);
          }}>
          Increase Counter
        </button>
      </div> 
    </div>
  );
}

function getData() {
  axios.get('https://randomuser.me/api')
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  });

}
export default App;
