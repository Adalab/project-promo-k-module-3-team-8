import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardGenerator from './CardGenerator';
import Landing from './Landing';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/cardgenerator" component={CardGenerator} />
    </Switch>
  );
}

export default App;
