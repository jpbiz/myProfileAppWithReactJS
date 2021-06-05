import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import Hello from './Components/Hello';
import Identity from './Components/Identity';
import Likes from './Components/Likes';
import Social from './Components/Social';

function App() {
  // Handle state for when the button is clicked
  const [name, setName] = useState('');

  const nameHandler = () => {
    setName('Hi, my name is JPierre!');
  };

  const skillsHandler = () => {
    setName("I'm a Front-End Developer");
  };

  // Counter
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <body>
      <div className='App'>
        <Header />
        <div className='app-body'>
          <Hello />
          <Identity hold={name} />
          <div className='btns'>
            <div className='btn'>
              <Button handleClick={nameHandler} text={'Name'} />
            </div>
            <div className='btn'>
              <Button handleClick={skillsHandler} text={'Skills'} />
            </div>
          </div>
          <div className='l-container'>
            <Identity hold={count} />
            <Likes countHandler={handleCount} />
          </div>
          <Social />
        </div>
      </div>
    </body>
  );
}

export default App;
