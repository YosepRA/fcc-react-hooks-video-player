import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Player from './Player';
import GlobalStyle from '../styles/GlobalStyle';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Player} />
          <Route exact path="/:activeVideo" component={Player} />
        </Switch>

        <GlobalStyle />
      </>
    </Router>
  );
}

export default App;
