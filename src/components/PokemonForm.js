import { useState } from 'react'

export const PokemonForm = ({setLoading, setError, setPokemonId}) => {
  const [pokemon, setPokemon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(pokemon !== '') {
      setError(false);
      setLoading(true);
      const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon;
      setPokemonId(pokemonID);
      setPokemon('');
      return 
    }
    setError(true);
  }
  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <fieldset value="something">
        <legend>Search by name or number</legend>
        <input
          className="pokemon-input" 
          type="text"
          placeholder="Search..."
          value={pokemon}
          onChange={e => setPokemon(e.target.value)}
        />
        <button type="submit" className="pokemon-btn" onSubmit={handleSubmit}>Search</button>
      </fieldset>
      
    </form>
  )
}
