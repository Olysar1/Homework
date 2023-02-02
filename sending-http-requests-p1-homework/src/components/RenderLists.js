import BtnBroup from "./BtnGroup";

const RenderLists = ({ colName, planList }) => {
  return (
    <div className="list-style">
      <h3>{colName}</h3>
      <ul>
        {planList.map((item) => (
          <li key={item.id}>
            <span>{item.task}</span>
            <BtnBroup itemStatus={item.status} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderLists;
