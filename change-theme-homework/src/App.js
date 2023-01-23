import "./App.css";
import useLocalStorage from "./Hooks/useLocalStorage";
import useDetectMobile from "./Hooks/useDetectMobile.js";

function App() {
  const [night, setNight] = useLocalStorage("is-night", false);
  const isMobile = useDetectMobile(false);
  // console.log(night);
  // console.log(isMobile);

  const handleDevice = () => {
    if (isMobile) {
      return "App";
    } else {
      return night ? "Night" : "App";
    }
  };

  return (
    <div className={handleDevice()}>
      <button onClick={() => setNight(!night)}>Change Theme</button>
      <div>
        <h1>Header</h1>
        <h2>Sub-Header</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div style={{ height: 1000 }}></div>
      </div>
    </div>
  );
}

export default App;
