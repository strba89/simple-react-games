import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import Layout from './views/Layout'
import Home from './views/Home'
import Memory from './Games/Memory'
import SlidingPuzzle from './Games/SlidingPuzzle'
import GameOverPage from './views/GameOverPage'
import SuccessPage from './views/SuccessPage'


export default (
  <BrowserRouter>
    <Switch component={Layout}>
      <Route exact path="/" component={Home} />
      <Route path='/memory' component={Memory} />
      <Route path='/sliding_puzzle' component={SlidingPuzzle}/>
      <Route path="/game_over" component={GameOverPage} />
      <Route path="/success" component={SuccessPage} />
    </Switch>
  </BrowserRouter>
)