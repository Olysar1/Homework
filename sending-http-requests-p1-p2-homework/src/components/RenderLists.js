import { Link } from "react-router-dom";
import { languages, useLanguageContext } from "../contexts/LanguageContext";
import BtnBroup from "./BtnGroup";

const RenderLists = ({ colName, planList }) => {
  const { language } = useLanguageContext();

  return (
    <div className="list-style">
      <h3>{colName}</h3>
      <ul>
        {planList.map((item) => (
          <li key={item.id}>
            <span>{item.task}</span>
            <Link to={`/task/${item.id}`} className="router-link-style">
              {languages[language].edit}
            </Link>
            <BtnBroup item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderLists;
