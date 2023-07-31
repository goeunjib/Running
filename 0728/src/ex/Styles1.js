const Styles1 = () => {
  const textStyle = {
    backgroundColor: "tomato",
    color: "#fff",
    width: "60%",
    textAlign: "center",
    margin: "0 auto",
  };

  return (
    <>
      <article style={{ border: "1px solid #000" }}>
        <h2 style={textStyle}>스타일 직접 적용</h2>
      </article>
    </>
  );
};

export default Styles1;
