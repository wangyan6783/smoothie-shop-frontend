import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact render={()=><Homepage />} />
          <Route path='/home' exact render={()=><Homepage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
