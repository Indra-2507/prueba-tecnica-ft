import { useEffect, useState } from "react";
import "./App.css";
import PokeCards from "./components/PokeCards";
import NavBar from "./components/NavBar";
import PokemonDetails from "./components/PokemonDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [sortPokemones, setSortPokemones] = useState([]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const getPokemones = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then((resp) => resp.json())
        .then((data) => {
          const results = data.results;

          const pokemonPromises = results.map((pokemon) =>
            fetch(pokemon.url)
              .then((resp) => resp.json())
              .then((pokeData) => ({
                id: pokeData.id,
                name: pokeData.name,
                img: pokeData.sprites.other.home.front_default,
                height: pokeData.height,
                weight: pokeData.weight,
              }))
          );

          Promise.all(pokemonPromises).then((updatedPokemones) =>
            setPokemones(updatedPokemones)
          );
        });
    };
    getPokemones();
  }, []);

  const sortPokemonesByNumberUp = (number) => {
    const sortedArray = [...pokemones];
    sortedArray.sort((a, b) => a[number] - b[number]);
    setSortPokemones(sortedArray);
    setSorted(true);
  };

  const sortPokemonesByNumberDown = (number) => {
    const sortedArray = [...pokemones];
    sortedArray.sort((a, b) => b[number] - a[number]);
    setSortPokemones(sortedArray);
    setSorted(true);
  };

  const resetSort = () => {
    setSorted(false);
    setSortPokemones([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar
                setSorted={setSorted}
                sortPokemonesByNumberUp={sortPokemonesByNumberUp}
                sortPokemonesByNumberDown={sortPokemonesByNumberDown}
                resetSort={resetSort}
              />
              <PokeCards pokemons={sorted ? sortPokemones : pokemones} />
            </>
          }
        />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
