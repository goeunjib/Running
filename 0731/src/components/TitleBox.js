import TitleStyle from "./TitleBox.module.css";

const TitleBox = () => {
  return (
    <div className={`wrapper ${TitleStyle.titleWrapper}`}>
      <h2 className={TitleStyle.title}>
        We are
        <br />
        Creative
        <br />
        Agency
      </h2>
      <p>Working with brands all over the world</p>
    </div>
  );
};

export default TitleBox;
