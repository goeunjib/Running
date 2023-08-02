import Navigation from "../components/Navigation";

const Header = () => {
  const headerStyle = {
    width: "100%",
    header: 60,
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #f00",
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          backgroundColor: "#FCBAAD",
          padding: 10,
          margin: "0 20px",
          fontSize: "1.2rem",
          fontWeight: 700,
        }}>
        로고
      </h1>

      <Navigation />
    </header>
  );
};

export default Header;
