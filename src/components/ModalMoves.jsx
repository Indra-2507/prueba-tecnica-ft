import { IoCloseCircle } from "react-icons/io5";
export default function ModalMoves({ setModalOpen, pokemonDetails }) {
  return (
    <section className="modal_section">
      <div className="modal">
        <header className="modal_header">
          <h3 className="modal_title">{pokemonDetails.name}</h3>
          <button className="modal_btn" onClick={() => setModalOpen(false)}>
            <IoCloseCircle />
          </button>
        </header>
        <h4 className="details_subtitles">
          Moves: {pokemonDetails.moves.length}
        </h4>
        <ul className="modal_ul">
          {pokemonDetails.moves.map((move, index) => (
            <li className="modal_li" key={index}>
              {move.move.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
