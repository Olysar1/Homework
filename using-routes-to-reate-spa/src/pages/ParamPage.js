import { useParams } from "react-router-dom";

const paramIds = {
  id1: "this is id1",
  id2: "this is id2",
  id3: "this is id3",
};

const ParamPage = () => {
  const params = useParams();
  const paramString = paramIds[params.paramId];

  if (!paramString)
    return (
      <div>
        <h2>This is param route</h2>
        <p>No such param was found</p>
      </div>
    );

  return (
    <div>
      <h2>This is param route</h2>
      <p>Param value is: {paramString}</p>
    </div>
  );
};

export default ParamPage;
