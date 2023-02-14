import RenderLists from "../components/RenderLists";
import { languages, useLanguageContext } from "../contexts/LanguageContext";
import { useTaskContext } from "../contexts/TasksContext";

const MainPage = () => {
  const { planList, isLoading, sendRequest } = useTaskContext();

  const { language } = useLanguageContext();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="list-wrapper">
      <RenderLists
        colName={languages[language].planned}
        planList={planList.filter((item) => item.status === "planned")}
        sendRequest={sendRequest}
      />
      <RenderLists
        colName={languages[language].progress}
        planList={planList.filter((item) => item.status === "inProgress")}
        sendRequest={sendRequest}
      />
      <RenderLists
        colName={languages[language].done}
        planList={planList.filter((item) => item.status === "done")}
        sendRequest={sendRequest}
      />
    </div>
  );
};

export default MainPage;
