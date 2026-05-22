import { MdOutlineLibraryAddCheck } from "react-icons/md";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <MdOutlineLibraryAddCheck size={50} color="white" />{" "}
      <span className="head__content">Todo</span>
    </div>
  );
}

export default Header;
