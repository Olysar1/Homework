import CreatePage from "./pages/CreatePage";
import MainPage from "./pages/MainPage";
import UpdatePage from "./pages/UpdatePage";

const routes = [
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <CreatePage />,
    path: "/user/create",
  },
  {
    element: <UpdatePage />,
    path: "/user/:userId",
  },
];

export default routes;
