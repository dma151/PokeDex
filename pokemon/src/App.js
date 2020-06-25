import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Pokedex from './Pokedex/Pokedex';
import MyTeam from './MyTeam/MyTeam';
import './App.css';

function App() {
  return (
    <div className="App">
     <nav>
       <Link to='/'>Pokedex</Link>
       <Link to='/myteam'>My Team</Link>
     </nav>

      <main>
        <Switch>
          <Route path='/' exact={true} component={Pokedex} />
          <Route path='/myteam' exact={true} component={MyTeam} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
