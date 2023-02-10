import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import LanguageContextProvider from "./contexts/LanguageContext";
import TasksContextProvider from "./contexts/TasksContext";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import MainPage from "./pages/MainPage";

const routes = [
  {
    element: (
      <div>
        <LanguageContextProvider>
          <Header />
          <Outlet />
        </LanguageContextProvider>
      </div>
    ),
    path: "/",
    children: [
      {
        element: (
          <TasksContextProvider>
            <MainPage />
          </TasksContextProvider>
        ),
        index: true,
      },
      {
        element: <AddTaskPage />,
        path: "task/create",
      },
      {
        element: <EditTaskPage />,
        path: "task/:taskId",
      },
    ],
  },
];

export default routes;
