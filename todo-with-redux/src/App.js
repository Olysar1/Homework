import "./App.css";
import Form from "./components/Form";
import Plans from "./components/Plans";

function App() {
  // const planList = useSelector((state) => state.plan.planList);

  return (
    <div className="App">
      <h2>Manage Plans</h2>
      <Form />
      <Plans />
    </div>
  );
}

export default App;
