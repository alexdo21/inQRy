import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

import Front from './pages/Front'
import Main from './pages/Main'
import Login from './components/Login'
import Register from './components/Register'
import CheckIn from './components/CheckIn';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Front} />
      <Route path='/site/:site' component={CheckIn} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/main' component={Main} />
    </Router>
  );
}

export default App;
