import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignIn from './SignIn';

function Apps() {
  return (
    <div className="App mr-0">
      <body className="App-header">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/SignIn" exact component={SignIn}/>
        </Switch>
      </body> 
    </div>
  );
}

export default Apps;