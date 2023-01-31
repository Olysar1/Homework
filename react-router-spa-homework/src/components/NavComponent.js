import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <div className="nav-style">
      <h1>Hercules</h1>
      <div className="link-wrapper">
        <Link to="/about-hercules" className="link-style">
          About Hercules
        </Link>
        <Link to="/labors" className="link-style">
          Labors
        </Link>
      </div>
    </div>
  );
};

export default NavComponent;
