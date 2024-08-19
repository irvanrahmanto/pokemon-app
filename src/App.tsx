import { useState } from "react";
import "./App.css";

/** Import JSON Data */
import pokemonData from "./json/pokemonApi.json";
/** Import Domain */
import { SelectedPokemon } from "./domain/commonDomain";
/** Import Components */
import HeaderBar from "./components/header";

function App() {
  const [pokemonSlice] = useState(pokemonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<SelectedPokemon | null>(null)

  const filteredPokemonList = pokemonSlice.results.filter((pokemon) =>
    pokemon.name.includes(searchTerm)
  );

  const showPokemon = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Error fetching Pokemon : ${response.statusText}`);
      return;
    }

    const data = await response.json();
    setSelectedPokemon(data);
  };

  return (
    <>
      <div className="App">
        <HeaderBar />
        <main>
          <div className="search-container">
            <input className="search-box" type="text" placeholder="Search..." value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
          </div>
          {/* <SearchBar /> */}
          {selectedPokemon && (
            <div className="pokemon-details">
              <h2>{selectedPokemon.name}</h2>
              <img
                src={selectedPokemon.sprites.front_default}
                alt={selectedPokemon.name}
              />
              <p>Height : {selectedPokemon.height}</p>
              <p>Weight : {selectedPokemon.weight}</p>

              {selectedPokemon.stats.map((stat, index) => (
                <div key={index}>
                  <p>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                </div>
              ))}
            </div>
          )}
          <ul>
            {filteredPokemonList.map((pokemon) => (
              <a
                key={pokemon.url}
                href="#"
                onClick={() => showPokemon(pokemon.url)}
              >
                {pokemon.name}
              </a>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
