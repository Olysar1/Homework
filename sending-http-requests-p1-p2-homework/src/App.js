import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import RenderLists from "./components/RenderLists";
import useFetchData from "./hooks/useFetchData";
import routes from "./routes";

function App() {
  // const [planList, setPlanList] = useState([]);

  // useEffect(() => {
  //   fetch("/api/v1/task", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${API_KEY}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok)
  //         throw new Error("Something went wrong while getting 'planList'");
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPlanList(
  //         data.items.map((item) => ({
  //           task: item.task,
  //           status: item.status,
  //           id: item.id,
  //         }))
  //       );
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  // return (
  //   <div className="App">
  //     <Form setPlanList={setPlanList} />
  //   </div>
  // );

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
