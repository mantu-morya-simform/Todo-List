import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import "./header.css";

type HeaderPropType = {
  mode: "light" | "dark";
  handleModeClick: () => void;
};

function Header({ mode, handleModeClick }: HeaderPropType) {
  return (
    <div className={`header ${mode == "light" ? "header__light" : ""}`}>
      <div className="left">
        <MdOutlineLibraryAddCheck
          className="check"
          size={50}
          color={`${mode === "dark" ? "white" : "black"}`}
        />
        <span
          className={`head__content ${mode == "light" ? "head__content__night" : ""}`}
        >
          Todo
        </span>
      </div>

      <div className="right">
        {mode !== "light" ? (
          <button className="mode__btn" onClick={handleModeClick}>
            <MdOutlineLightMode />
          </button>
        ) : (
          <button className="mode__btn" onClick={handleModeClick}>
            <MdNightlight />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
