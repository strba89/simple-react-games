import React from 'react';
import App from '../../../sliding-puzzle/src/Components/App';
import { Provider } from 'react-redux';
import type { GameState } from "../../../sliding-puzzle/src/types";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import {withRouter} from "react-router-dom";

import DevTools from "../../../sliding-puzzle/src/utils/ReduxDevtools";


import configureStore from "../../../sliding-puzzle/src/store/configureStore";
import {
  SOLVED_USER
} from "../../../sliding-puzzle/src/types";

type SlidingPuzzlePropTypes =  {
  gameState: GameState
}

const store = configureStore();
const SlidingPuzzle = ({history},{ gameState }:SlidingPuzzlePropTypes) =>{
  switch (gameState) {
    case SOLVED_USER: {
      history.push("/success")
      break;
    }
    default:
      break;
  }
  return(
    <Provider store={store}>
      <div>
        <App />
        { !window.devToolsExtension ? <DevTools /> : null }
      </div>
    </Provider>
  )
};

export default withRouter(SlidingPuzzle)

