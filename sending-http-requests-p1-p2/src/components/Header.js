import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { themeCode, toggleTheme } = useThemeContext();

  return (
    <header>
      <button onClick={toggleTheme}>
        {`switch to ${themeCode === "black" ? "white" : "black"}`}
      </button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/user/create"}>Create</Link>
    </header>
  );
};

export default Header;
