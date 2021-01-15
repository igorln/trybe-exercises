import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            pokedexIndex: 0
        }
    }

    nextPokemon = (numberOfPokemon) => {
        this.setState((pastState, _props) => ({
            pokedexIndex: (pastState.pokedexIndex + 1) % numberOfPokemon
        }))
    }

    render() {
        return (
            <div className="pokedex">
                <Pokemon key={this.props.pokemons[this.state.pokedexIndex].id} pokemon={this.props.pokemons[this.state.pokedexIndex]} />
                <div>
                    <button onClick={() => this.nextPokemon(this.props.pokemons.length)}>Próximo Pokémon</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;
