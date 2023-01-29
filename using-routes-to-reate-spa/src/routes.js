import WildCardPage from "./pages/WildCardPage";
import IndexPage from "./pages/IndexPage";
import CommonLayout from "./layouts/CommonLayout";
import AboutUsPage from "./pages/AboutUsPage";
import FindMe from "./pages/FindMePage";
import MainPage from "./pages/MainPage";
import NewLayoutPage from "./pages/NewLayoutPage";
import ParamPage from "./pages/ParamPage";

const routes = [
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <AboutUsPage />,
    path: "about-us",
  },
  {
    element: <CommonLayout />,
    children: [
      {
        element: <FindMe />,
        path: "find-me",
      },
      {
        element: <NewLayoutPage />,
        path: "new-layout",
      },
    ],
  },
  {
    element: <CommonLayout />,
    path: "common-layout",
    children: [
      {
        element: <IndexPage />,
        index: true,
      },
      {
        element: <FindMe />,
        path: "find-me",
      },
      {
        element: <ParamPage />,
        path: ":paramId",
      },
    ],
  },
  {
    element: <WildCardPage />,
    path: "*",
  },
];

export default routes;
