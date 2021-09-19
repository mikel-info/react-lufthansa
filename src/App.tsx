import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DetailCountries from './component/DetailCountriesItem';
import Countries from './component/pages/Countries';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/detail-country" exact component={DetailCountries} />
          <Route path="/products" exact />
        </Switch>
      </Router>
    </>
  )
}

export default App;
