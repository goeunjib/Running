import { useState } from "react";
import navStyle from "./Navigation.module.css";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navigation = () => {
  // [menu:상태값, setMenu:적용할함수] 상태값을 함수에 적용 후 다시 상태에 돌려 보냄
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <nav>
      <ul className={`${navStyle.globalMenu} ${menu && navStyle.active}`}>
        <li>home</li>
        <li>about</li>
        <li>products</li>
        <li>contact</li>
      </ul>

      <div className={navStyle.mobileButton} onClick={toggleMenu}>
        {/* 삼항연산자 조건 ? 참 : 거짓 */}
        {menu ? <BiX /> : <BiMenuAltRight />}
      </div>
    </nav>
  );
};

export default Navigation;
