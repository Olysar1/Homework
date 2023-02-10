import RenderLists from "../components/RenderLists";
import { languages, useLanguageContext } from "../contexts/LanguageContext";
import { useTaskContext } from "../contexts/TasksContext";

const MainPage = () => {
  const { planList, isLoading } = useTaskContext();

  const { language } = useLanguageContext();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="list-wrapper">
      <RenderLists
        colName={languages[language].planned}
        planList={planList.filter((item) => item.status === "planned")}
      />
      <RenderLists
        colName={languages[language].progress}
        planList={planList.filter((item) => item.status === "inProgress")}
      />
      <RenderLists
        colName={languages[language].done}
        planList={planList.filter((item) => item.status === "done")}
      />
    </div>
  );
};

export default MainPage;
