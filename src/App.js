import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [counter, setCounter] = useState(0);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    getUserData().then(res => { setUserData(res || 'Unable to fetch user data'); });
  }, []);

  return (
    <div className='App'>
      <h1>Hello React Sandbox</h1>
      <div>
        <p>
          {counter}
        </p>
        <button onClick={() => {
          setCounter(counter + 1);
          }}>
          Increase Counter
        </button>

        <h2>Random User Data</h2>
        <pre>
          {userData}
        </pre>
      </div> 
    </div>
  );
}

function getUserData(setUserData) {
  return axios.get('https://randomuser.me/api')
  .then(({data}) => {
    console.log(data);
    return JSON.stringify(data, null, 2);
  })
  .catch((error) => {
    console.log(error);
  });
}

export default App;
