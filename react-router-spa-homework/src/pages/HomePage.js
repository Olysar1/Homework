import HerculesImg from "../Hercules-image.png";
import NavComponent from "../components/NavComponent";

const HomePage = () => (
  <div className="home-page">
    <NavComponent />
    <img className="" src={HerculesImg} alt="hercules img" />
  </div>
);

export default HomePage;
