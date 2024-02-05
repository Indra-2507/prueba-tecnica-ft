import { Link } from "react-router-dom";
export default function PokeCards({ pokemons }) {
  return (
    <section className="cards">
      <h1 className="title border">Gotta Catch 'Em All</h1>
      {pokemons.map((poke) => (
        <div key={poke.id} className="pokemon_card">
          <Link to={`/pokemon/${poke.id}`} style={{ textDecoration: "none" }}>
            <h2 className="pokemon_card_name">{poke.name}</h2>
            <img src={poke.img} alt={poke.name} className="pokemon_card_img" />
            <ul className="pokemon_card_article">
              <li className="pokemon_card_span">Number: {poke.id}</li>
              <li className="pokemon_card_span">Height: {poke.height}</li>
              <li className="pokemon_card_span">Weight: {poke.weight}</li>
            </ul>
          </Link>
        </div>
      ))}
    </section>
  );
}
