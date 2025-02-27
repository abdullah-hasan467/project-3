// App.js
import React, { useState } from 'react';
import PlayGames from './components/PlayGames';
import StartGames from './components/StartGames';
import './index.css';

const App = () => {
  const [start, setStart] = useState(true);
  const toggleStart = () => {
    setStart((prev) => !prev);
  };
  return (
    <>
      {start ? <PlayGames /> : <StartGames toggleStart={toggleStart} />}
    </>
  );
};

export default App;
