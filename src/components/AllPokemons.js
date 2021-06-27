import { Loading } from './Loading';
import {useState, useEffect} from 'react';

const base_url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898';

export const AllPokemons = ({setPokemonId}) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(base_url)
      .then(res => {
        return res.json()
      })
      .then(({results}) => {
        setPokemons(results)
        setLoading(false)
      })
      .catch(err => console.log(err));
  }, [])
  
  const handleClick = (ev) => {
    setPokemonId(Number(ev.target.id) + 1);
  }

  return (
    <div className="pokemons-container">
    {
      !pokemons || loading ? <Loading title="Loading Pokemons..."/> : pokemons.map((pokemon, id) => {
        return (
          <article key={id} className={"PokemonCard"} onClick={handleClick} id={id+1}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`} alt={pokemon.name} id={id}/>
            <p className="PokemonName" id={id+1}>{id+1}. {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </article>
        )
      })
    }
    </div>    
  )
}
