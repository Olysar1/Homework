import { Link } from "react-router-dom";

const MainPage = () => (
  <div>
    <h1>This is the main page</h1>
    <Link to="/about-us">About Us</Link>
    <Link to="/find-me">Find Me</Link>
    <Link to="/new-layout">New Layout</Link>
    <Link to="/common-layout">Common Layout</Link>
    <Link to="/common-layout/find-me">Find Me </Link>
  </div>
);
export default MainPage;
