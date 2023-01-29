import { useOutletContext } from "react-router-dom";

const IndexPage = () => {
  const { setCount } = useOutletContext();

  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>this is index page</p>
      <button onClick={addCount}>Add Count</button>
    </div>
  );
};

export default IndexPage;
