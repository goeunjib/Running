import { BiArrowFromBottom } from "react-icons/bi";
import ButtonStyle from "./FixedButton.module.css";

const FixedButton = () => {
  const handleOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={ButtonStyle.onTop} onClick={handleOnTop}>
        <BiArrowFromBottom />
      </div>
    </>
  );
};

export default FixedButton;
