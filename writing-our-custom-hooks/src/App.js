import "./App.css";
import { useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useCopyToClipboard from "./hooks/useCopyToClipboard";
import usePageBottom from "./hooks/usePageBottom";
import useWindowResize from "./hooks/useWindowResize";
import useDetectDevice from "./hooks/useDetectDevice";

function App() {
  const [isOpen, toggle] = useLocalStorage("is-open", false);

  const { isCopied, copy } = useCopyToClipboard(2000);

  const isBottom = usePageBottom();
  console.log(isBottom);

  const { width, height } = useWindowResize();
  console.log(width, height);

  const device = useDetectDevice();
  console.log(device);

  const inputRef = useRef();

  return (
    <div className="App">
      <button onClick={() => toggle((isOpen) => !isOpen)}>Toggle</button>
      {isOpen && <div>TRAKI</div>}
      <br />
      <div>
        <input ref={inputRef} />
        <button onClick={() => copy(inputRef.current.value)}>Copy</button>
        {isCopied && <p>your text has been copied</p>}
      </div>
      <p>{device}</p>
      {/* <div style={{ height: 3000 }}>TRAKI</div> */}
    </div>
  );
}

export default App;
