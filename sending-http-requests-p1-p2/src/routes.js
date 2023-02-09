import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ThemeContextProvider from "./contexts/ThemeContext";
import UsersContextProvider from "./contexts/UserContext";
import CreatePage from "./pages/CreatePage";
import MainPage from "./pages/MainPage";
import UpdatePage from "./pages/UpdatePage";

const routes = [
  {
    element: (
      <div>
        <ThemeContextProvider>
          <Header />
          <Outlet />
        </ThemeContextProvider>
      </div>
    ),
    path: "/",
    children: [
      {
        element: (
          <UsersContextProvider>
            <MainPage />
          </UsersContextProvider>
        ),
        index: true,
      },
      {
        element: <CreatePage />,
        path: "user/create",
      },
      {
        element: <UpdatePage />,
        path: "user/:userId",
      },
    ],
  },
];

export default routes;
