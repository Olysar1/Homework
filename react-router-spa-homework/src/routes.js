import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Labors } from "./pages/Labors";
import LaborPage from "./pages/LaborPage";

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
    path: "labors",
    children: [
      {
        element: <LaborPage />,
        path: ":laborNum",
      },
    ],
  },
];

export default routes;
