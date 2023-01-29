import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const App = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default App;
