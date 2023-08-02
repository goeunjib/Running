import navStyle from "./Navigation.module.css";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navigation = () => {
  return (
    <nav>
      <ul className={navStyle.globalMenu}>
        <li>home</li>
        <li>about</li>
        <li>products</li>
        <li>contact</li>
      </ul>

      <div className={navStyle.mobileButton}>
        <BiMenuAltRight />
        <BiX />
      </div>
    </nav>
  );
};

export default Navigation;
