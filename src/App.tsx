import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Countries from './component/pages/Countries';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/services" exact />
          <Route path="/products" exact />
        </Switch>
      </Router>
    </>
  )
}

export default App;
