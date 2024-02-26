import React, { useState } from 'react';
import TicTacToe from './games/TicTacToe';
import './App.css';


const App = () => {
  
  const [showTicTacToe, setShowTicTacToe] = useState(false);
 
  const handleTicTacToeClick = () => {
    setShowTicTacToe(!showTicTacToe);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleTicTacToeClick}>TicTacToe</button>
        {showTicTacToe && <TicTacToe />}
      </header>
    </div>
  );
};

export default App;