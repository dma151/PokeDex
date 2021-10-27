import { useState } from 'react'
import {Route, Link, Redirect} from 'react-router-dom'
import Pokedex from '../Components/Pokedex';
import MyTeam from '../Components/MyTeam';
import './App.css';
import image from '../Images/pokemon-logo-png-1421.png'

function App() {
  const [myTeam, setMyTeam] = useState([])
  const [pokeList, setPokeList] = useState([])
  return (
    <div className="App">
      <nav>
        <Link to='/pokedex'><p>Pokedex</p></Link>
        <img src={image} alt='logo' />
        <Link to='/myteam'><p>My Team</p></Link>
      </nav>
      <main>
          <Route path='/pokedex' render={() => <Pokedex pokeList={pokeList} setPokeList={setPokeList} setMyTeam={setMyTeam} myTeam={myTeam}/>} />
          <Route path='/myteam' render={() => <MyTeam myTeam={myTeam} setMyTeam={setMyTeam} />} />
          <Redirect to='/pokedex' />
      </main>
    </div>
  );
}

export default App;
