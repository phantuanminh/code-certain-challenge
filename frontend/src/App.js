import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch('/api').then(response =>
      response.json().then(data => {
        console.log(data);
      })
      );
  }, []);

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
