import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
    <div className="pokedex-box">
      <div className="center">
        <h3> {name} </h3>
        <p> {type} </p>
        <p> Average weight: {averageWeight.value} {averageWeight.measurementUnit} </p>
      </div>
      <img src={image} alt={name} />
    </div>
    )
  }
}

export default Pokemon;
