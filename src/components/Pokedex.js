import { useState, useEffect } from 'react';
import { PokedexScreen } from './PokedexScreen';
import { PokemonForm } from './PokemonForm';
import { AllPokemons } from './AllPokemons';

export const Pokedex = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState('');
  const RandomId = Math.floor(Math.random() * 898) + 1;
  const [pokemonID, setPokemonId] = useState(RandomId);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPokemon(data);
      setLoading(false);
      setError(false);
    })
    .catch(er => {
      console.log(er);
      setLoading(false);
      setError(true);
    })
  }, [pokemonID])

  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-screen">
          <PokedexScreen 
            pokemon={pokemon}
            loading={loading}
            error={error}
          />
          <PokemonForm
            setPokemonId={setPokemonId}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </div>
      <div className="pokedex-right">
        <h1>All Pokemons</h1>
        <AllPokemons setPokemonId={setPokemonId}/>
      </div>
    </div>
  );
};
