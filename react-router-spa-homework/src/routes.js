import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Labors from "./pages/Labors";

const routes = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <AboutPage />,
    path: "about-hercules",
  },
  {
    element: <Labors />,
    path: ":laborNum",
  },
];

export default routes;
