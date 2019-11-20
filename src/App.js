import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact render={()=><Home />} />
          <Route path='/home' exact render={()=><Home />} />
          <Route path='/login' exact render={()=><Login />} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
