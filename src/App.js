import React from 'react';
import Library from './components/Library';
import Selection from './components/Selection/Selection';
import SetSelection from './components/SetSelection/SetSelection'
import './sass/Master.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/:library/:selection' render={(props) => <Selection match={props.match}/>}/>
          <Route path='/:library' render={(props) => <SetSelection match={props.match}/>}/>
          <Route path='/' render={(props) => <Library match={props.match} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
