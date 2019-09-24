import React from 'react';
import { connect } from 'react-redux';
import action from './action';

function App({
  pokemonCaught,
  markCaught,
  pokemon,
  searchTerm,
  searchTermChanged,
}) {
  return (
    <section>
      <h1>Pokemon Go Pokedex</h1>

      <form>
        <div>
          <input
            style={{ width: '100%' }}
            type="text"
            name="search"
            placeholder="Search Pokedex"
            value={searchTerm}
            onChange={e => searchTermChanged(e.target.value)}
          />
        </div>
      </form>

      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>Name</th>
            <th>Type</th>
            <th>Stage</th>
            <th>Species</th>
            <th>Caught?</th>
          </tr>
        </thead>
        <tbody>
          {pokemon && pokemon.map(thisPokemon => (
            <tr key={thisPokemon.name}>
              <td>{thisPokemon.name}</td>
              <td>{thisPokemon.type}</td>
              <td>{thisPokemon.stage}</td>
              <td>{thisPokemon.species}</td>
              <td>
                {pokemonCaught.includes(thisPokemon.name) ? (
                  'Caught!'
                ) : (
                  <button type="button" onClick={() => markCaught(thisPokemon.name)}>Capture</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default connect(store => store, action)(App);
