import { Stat } from './Stat'
import { Loading } from './Loading'

export const PokedexScreen = ({ pokemon, loading, error }) => {

  return (
    <div className="pokedex-screen">
      {
        error ? <div className="pokedex-screen">
          <div className="pokemon-info">
            <h1>Error: try with another name or number</h1>
          </div>
        </div> : !pokemon || loading ? <Loading title="Loading Pokemon..." />
          : <div className={"pokemon-info " + pokemon.types[0].type.name} >
          <h2 className="pokemon-name">{pokemon.id}. {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <div className="pokemon-details">
            <img
              className="pokemon-img"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <ul className="stat__list">
              {
                pokemon.stats.map((item) => {
                  return <Stat key={item.stat.name} el={item} />
                })
              }
            </ul>
          </div>
          <div className="type__containers">
            <h4>Type(s):</h4>
            <ul className="list__types">
              {
                pokemon.types.map((type) => {
                  return <li className={`type ${type.type.name}`} key={type.slot} >{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</li>
                })
              }
            </ul>
          </div>          
        </div>
      }
    </div>
  );
}
