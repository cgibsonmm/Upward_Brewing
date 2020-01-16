import React from 'react'
import Home from './Home'
import {Switch, Route} from 'react-router-dom'

function MainView() {
  return (
    <>
      {process.env.MAP_BOX_API_KEY}
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </>
  )
}

export default MainView
