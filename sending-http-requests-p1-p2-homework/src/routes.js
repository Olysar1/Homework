import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import MainPage from "./pages/MainPage";

const routes = [
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <AddTaskPage />,
    path: "/task/create",
  },
  {
    element: <EditTaskPage />,
    path: "/task/:taskId",
  },
];

export default routes;
