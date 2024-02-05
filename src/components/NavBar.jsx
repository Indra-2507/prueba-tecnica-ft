import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function NavBar({
  sortPokemonesByNumberUp,
  sortPokemonesByNumberDown,
  resetSort,
}) {
  return (
    <nav className="navBar ">
      <h3 className="navBar_title ">Order your Pokemon by:</h3>
      <article className="navBar_article">
        <div className="navBar_div">
          <span>Weigth</span>
          <button
            className="navBar_btn"
            onClick={() => sortPokemonesByNumberUp("weight")}
          >
            <FaLongArrowAltUp />
          </button>
          <button
            className="navBar_btn"
            onClick={() => sortPokemonesByNumberDown("weight")}
          >
            <FaLongArrowAltDown />
          </button>
        </div>
        <div className="navBar_div">
          <span>Heigth</span>
          <button
            className="navBar_btn"
            onClick={() => sortPokemonesByNumberUp("height")}
          >
            <FaLongArrowAltUp />
          </button>
          <button
            className="navBar_btn"
            onClick={() => sortPokemonesByNumberDown("height")}
          >
            <FaLongArrowAltDown />
          </button>
        </div>
        <div className="navBar_div">
          <span>Number</span>
          <button
            className="navBar_btn"
            onClick={() => sortPokemonesByNumberUp("id")}
          >
            <FaLongArrowAltUp />
          </button>
          <button
            className="navBar_btn"
            onClick={() => sortPokemonesByNumberDown("id")}
          >
            <FaLongArrowAltDown />
          </button>
        </div>
      </article>
      <button className="navBar_reset" onClick={resetSort}>
        Reset
      </button>
    </nav>
  );
}
