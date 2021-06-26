import { Loading } from './Loading';
import {useState, useEffect} from 'react';

const base_url = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async (url, setPokemons, setLoading) => {
  const container = [];
  setLoading(true)
  for (let i = 1; i <= 1118; i++) {
    const response = await fetch(`${url}${i}`);
    const data = await response.json();
    
    container.push(data);
  }
  setPokemons(container);
  setLoading(false)
}

export const AllPokemons = ({setPokemonId}) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(base_url, setPokemons, setLoading);
  }, [])
  
  const handleClick = (ev) => {
    setPokemonId(ev.target.id);
  }

  return (
    <div className="pokemons-container">
    {
      !pokemons || loading ? <Loading title="Loading Pokemons..."/> : pokemons.map(pokemon => {
        return (
          <article key={pokemon.id} className={"PokemonCard " + pokemon.types[0].type.name} onClick={handleClick} id={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} id={pokemon.id}/>
            <p className="PokemonName" id={pokemon.id}>{pokemon.id}. {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </article>
        )
      })
    }
    </div>    
  )
}
