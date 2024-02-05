import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import ModalMoves from "./ModalMoves";

export default function PokemonDetails() {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [showImage, setShowImage] = useState(true);
  const [showMoves, setShowMoves] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  const handleView = () => {
    setShowImage(!showImage);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonDetails(data);
      });
  }, [id]);

  return (
    <section className="details_section">
      <Link to={"/"}>
        <button className="navBar_reset home">
          Home <FaHome />
        </button>
      </Link>
      <h2 className="details_title border">Hi! I'm {pokemonDetails.name}</h2>
      {pokemonDetails && (
        <article className="details_article">
          {pokemonDetails.sprites && (
            <div className="details_div_img">
              <img
                className="details_img"
                src={
                  showImage
                    ? pokemonDetails.sprites.other.showdown.front_default
                    : pokemonDetails.sprites.other.showdown.back_default
                }
                alt={pokemonDetails.name}
              />
              <button className="details_img_btn">
                <FaArrowsRotate onClick={handleView} />
              </button>
            </div>
          )}
          <section className="details_section_description">
            <div className="details_experience_div">
              <h4 className="details_subtitles">
                Experience:{" "}
                <span className="details_experience_span">
                  {pokemonDetails.base_experience}
                </span>
              </h4>
            </div>
            {pokemonDetails.abilities && (
              <div className="details_abilities_div">
                <h4 className="details_subtitles">Abilities:</h4>
                <ul>
                  {pokemonDetails.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                  ))}
                </ul>
              </div>
            )}
            {pokemonDetails.types && (
              <div className="details_types_div">
                <h4 className="details_subtitles">Slots:</h4>
                <ul className="details_ul">
                  {pokemonDetails.types.map((type, index) => (
                    <li className="details_li" key={index}>
                      {type.type.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
          {pokemonDetails.moves && (
            <div className="details_moves_div">
              <h4 className="details_subtitles">
                Moves:{pokemonDetails.moves.length}
              </h4>
              <ul className={`details_ul ${showMoves ? "row" : ""}`}>
                {pokemonDetails.moves
                  .slice(0, showMoves ? pokemonDetails.moves.length : 10)
                  .map((move, index) => (
                    <li className="details_li" key={index}>
                      {move.move.name}
                    </li>
                  ))}
              </ul>
              <button
                className="details_moves_btn"
                onClick={() => {
                  setModalOpen(!modalOpen);
                }}
              >
                More... <FaLongArrowAltDown />
              </button>
            </div>
          )}
        </article>
      )}
      {modalOpen && (
        <>
          <ModalMoves
            setModalOpen={setModalOpen}
            pokemonDetails={pokemonDetails}
          />
        </>
      )}
    </section>
  );
}
