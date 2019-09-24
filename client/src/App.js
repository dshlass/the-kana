import React from 'react';
import Library from './components/Library';
import Selection from './components/Selection/Selection';
import './sass/Master.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/:character/:sound' render={(props) => <Selection match={props.match}/>}/>
          <Route path='/:character' render={(props) => <Selection match={props.match}/>}/>
          <Route path='/' render={(props) => <Library match={props.match} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
