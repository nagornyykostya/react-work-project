import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Forbidden} from './components/forbidden/Forbidden'
import {SignIn} from './components/signIn/SignIn'

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/403forbidden" component={Forbidden} />
    </div>
    </Router>
  );
}

export default App;
