import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "./Store";
import { fetchPokemonData } from "./actions/PokemonActions";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const pokemonReducer = useSelector(
    (state: RootReducerType) => state.PokemonReducer
  );
  const dispatch = useDispatch();

  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const searchButtontapped = () => {
    dispatch(fetchPokemonData(pokemonName));
  };

  return (
    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button onClick={searchButtontapped}>포켓몬찾기</button>
      {pokemonReducer.success && (
        <div>
          <p>{pokemonName}</p>
          <div>
            {pokemonReducer.pokemon?.abilities.map((ability) => {
              return (
                <div key={ability.ability.name}>
                  <p>{ability.ability.name}</p>
                  <p>{ability.slot}</p>
                </div>
              );
            })}
          </div>
          <img
            src={pokemonReducer.pokemon?.sprites.front_default}
            alt="포켓몬"
          />
        </div>
      )}
    </div>
  );
}

export default App;
