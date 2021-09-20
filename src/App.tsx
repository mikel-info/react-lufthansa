import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import DetailCountries from './component/pages/DetailCountries';
import Countries from './component/pages/Countries';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/countries" />
          <Route path="/countries" exact component={Countries} />
          <Route path="/detail-country" exact component={DetailCountries} />
          <Route path="/products" exact />
        </Switch>
      </Router>
    </>
  )
}

export default App;
