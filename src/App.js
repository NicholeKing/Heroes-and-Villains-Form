import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [myChar, setMyChar] = useState([]);

  const addMyChar = (character) => {
    //Do a thing
    setMyChar([...myChar, character]);
  }

  const changeAliveStatus = idx => {
    const charToUpdate = myChar[idx];
    charToUpdate.isAlive = !charToUpdate.isAlive;
    setMyChar([...myChar]);
  }

  return (
    <div className="container row">
      <Form onSubmitChar={addMyChar}></Form>
      <Results allChars={myChar} updateIsAlive={changeAliveStatus}/>
    </div>
  );
}

export default App;
