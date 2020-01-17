import React from 'react'
import Home from './Home'
import {Switch, Route} from 'react-router-dom'

function MainView() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </>
  )
}

export default MainView
