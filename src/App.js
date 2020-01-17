import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MainView from './pages/MainView'

function App() {
  return (
    <MainView />
  );
}

export default ()=> (<Router><App/></Router>);
