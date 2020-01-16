import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MainView from './pages/MainView'
import './App.css'

function App() {
  return (
    <MainView/>
  );
}

export default ()=> (<Router><App/></Router>);
