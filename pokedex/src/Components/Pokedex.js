import { useEffect, useState } from "react";
import './Pokedex.css'

const Pokedex = (props) => {

    const [currentPoke, setCurrentPoke] = useState({})

    useEffect(()=> {
        const makeApiCall = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const json = await res.json()
            props.setPokeList(json.results)
        }
        makeApiCall();
    }, [])

    const handleClick = (event) => {
        const makeApiCall = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.id}/`)
            const json = await res.json()
            setCurrentPoke(json)
        }
        makeApiCall();
    }

    const handleTeam = (data) => {
        props.setMyTeam([...props.myTeam, data])
    }

    return (
        <div className='pokedex'>
            <div className='pokeList'>
                <ul>
                    {props.pokeList.length && props.pokeList.map((item, i) => {
                        return (
                            <li className='pokeListName' key={item.url} id={i + 1} onClick={handleClick}>{item.name.charAt(0).toUpperCase()}{item.name.slice(1)}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='circle' />
            <div className='sidebar'>
                {currentPoke.hasOwnProperty('abilities') && 
                    <div className='current'>
                        <img src={currentPoke.sprites.front_default} alt={currentPoke.forms[0].name} />
                        <h4>{currentPoke.forms[0].name.charAt(0).toUpperCase()}{currentPoke.forms[0].name.slice(1)}</h4>
                        <p>Height: {currentPoke.height}</p>
                        <p>Weight: {currentPoke.weight}</p>
                        <p>Type: {currentPoke.types.map((data) => {
                            return (data.type.name + ' ')
                        })}</p>
                        <button onClick={()=>handleTeam(currentPoke)}>Add to Team</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Pokedex