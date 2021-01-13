import React from 'react';
import pokemons from './data';
import Pokemon from './pokemon'

class Pokedex extends React.Component {
  render() {
    return (
      <div className='flex-box'>
        {pokemons.map(monster => <Pokemon pokemon={monster}/>)}
      </div>
    )
  }
}

export default Pokedex;