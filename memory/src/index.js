import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import MemoryGame from './views/Play'


let memoryGameCallback = (state) => {
  console.log(state);
  if (state.victory) {
    window.alert('pobeda!')
  } else {
    window.alert('vise srece drugi put')
  }
};

ReactDOM.render(
  <MemoryGame onGameFinished={memoryGameCallback} />,
  document.getElementById('root')
);
