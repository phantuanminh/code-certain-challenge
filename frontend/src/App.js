import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChallengeForm } from './components/form';
import { Container } from "semantic-ui-react";

function App() {
  // useEffect(() => {
  //   fetch('/api').then(response =>
  //     response.json().then(data => {
  //       console.log(data);
  //     })
  //     );
  // }, []);

  return (
    <div className="App">
      <Container>
        <ChallengeForm />
      </Container>
    </div>
  );
}

export default App;
