import './MyTeam.css'

const MyTeam = (props) => {
    console.log(props.myTeam)
    const handleClick = (pokemon) => {
        const temp = props.myTeam.filter(data => data.forms[0].name !== pokemon)
        props.setMyTeam(temp)
    }
    return (
        <div className='pokedex'>
            <div className='pokeList' />
            <div className="circle" />
            <div className='team'>
                <ul>
                    {props.myTeam.length && props.myTeam.map((data) => {
                        return(
                            <li key={data.id} className='chosenTeam'>
                                <img src={data.sprites.front_default} alt={data.forms[0].name} />
                                <h4>{data.forms[0].name.charAt(0).toUpperCase()}{data.forms[0].name.slice(1)}</h4>
                                <button onClick={() => handleClick(data.forms[0].name)}>Remove</button>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default MyTeam