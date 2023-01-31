import { useParams } from "react-router-dom";
import { labors } from "./Labors";

const LaborPage = () => {
  const params = useParams();
  const item = labors[params.laborNum];

  if (!item)
    return (
      <div className="info-page-style">
        <h1>NOT FOUND</h1>
        <h3>No such entry found.</h3>
      </div>
    );

  return (
    <div className="info-page-style">
      <h1>{item.title}</h1>
      <h2>{item.text}</h2>
      <img src={item.img} alt="labor" />
    </div>
  );
};

export default LaborPage;
