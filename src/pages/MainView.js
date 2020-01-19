import React from 'react'
import Home from './Home'
import Navbar from './../components/Navbar'
import {Switch, Route} from 'react-router-dom'

function MainView() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  )
}

export default MainView
