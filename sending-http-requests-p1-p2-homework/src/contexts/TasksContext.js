import { createContext, useContext, useMemo } from "react";
import useFetchData from "../hooks/useFetchData";

const TasksContext = createContext(null);

const TasksContextProvider = ({ children }) => {
  const { responseData, isLoading, sendRequest } = useFetchData({
    requestUrl: "/api/v1/task",
    method: "GET",
  });
  const planList = useMemo(() => {
    return (
      responseData?.items.map((item) => ({
        task: item.task,
        status: item.status,
        id: item._uuid,
      })) || []
    );
  }, [responseData]);

  const contextValue = useMemo(
    () => ({ planList, isLoading, sendRequest }),
    [planList, isLoading, sendRequest]
  );

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskContext = () => {
  const contextValue = useContext(TasksContext);

  if (!contextValue)
    throw new Error("useTaskContext must be inside TasksContextProvider");

  return contextValue;
};

export default TasksContextProvider;
