import React from 'react';
import './../index.css';
import MemoryGame from '../../../memory/src/views/Play'
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
const Memory = ({ history }) =>{

  const memoryGameCallback = (state) => {
    if (state.victory) {
      history.push("/success")
    } else if(state.gameOver) {
      history.push("/game_over")
    }
  }
    return (
      <MemoryGame onGameFinished={memoryGameCallback} />
    );
}
Memory.propTypes = {
  history: PropTypes.object.isRequired
}
export default withRouter(Memory);