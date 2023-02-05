import useFetchData from "../hooks/useFetchData";
import RenderLists from "../components/RenderLists";

const MainPage = () => {
  const { responseData } = useFetchData({
    requestUrl: "/api/v1/task",
    method: "GET",
  });
  const planList =
    responseData?.items.map((item) => ({
      task: item.task,
      status: item.status,
      id: item._uuid,
    })) || [];

  return (
    <div className="list-wrapper">
      <RenderLists
        colName={"Planned"}
        planList={planList.filter((item) => item.status === "planned")}
      />
      <RenderLists
        colName={"In Progress"}
        planList={planList.filter((item) => item.status === "inProgress")}
      />
      <RenderLists
        colName={"Done"}
        planList={planList.filter((item) => item.status === "done")}
      />
    </div>
  );
};

export default MainPage;
