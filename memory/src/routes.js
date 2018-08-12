import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import React from 'react'

import Layout from './views/layout'
import PageNotFound from './views/page-not-found'
// import Home from './views/home'
import Play from './views/Play'

export default (
  <div className='container justify-content-center'>
    <div className='row align-items-center justify-content-center'>
      <div className='col-xl-9 col-md-12 col-12'>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Play} />
            <Route path='*  ' component={PageNotFound}/>
          </Route>
        </Router>
      </div>
    </div>
  </div>
)
