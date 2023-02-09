import { createContext, useCallback, useContext, useMemo } from "react";
import useFetchData from "../hooks/useFetchData";
import useSendRequest from "../hooks/useSendRequest";

const UsersContext = createContext(null);

const UsersContextProvider = ({ children }) => {
  const {
    responseData,
    resendRequest,
    isLoading: isDataLoading,
  } = useFetchData({
    requestUrl: "/api/v1/users",
    method: "GET",
  });
  const userList = useMemo(() => {
    return (
      responseData?.items.map((item) => ({
        firstName: item.firstName,
        lastName: item.lastName,
        id: item._uuid,
      })) || []
    );
  }, [responseData]);

  const { sendRequest, isLoading } = useSendRequest({ method: "DELETE" });

  const deleteUser = useCallback(
    (userId) => {
      sendRequest(null, `/api/v1/users/${userId}`)
        .then(() => {
          resendRequest();
        })
        .catch((error) => console.error(error));
    },
    [sendRequest, resendRequest]
  );

  const contextValue = useMemo(
    () => ({
      isDataLoading,
      isDeleteLoading: isLoading,
      deleteUser,
      userList,
    }),
    [isDataLoading, isLoading, deleteUser, userList]
  );

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const contextValue = useContext(UsersContext);
  if (!contextValue)
    throw new Error("useUsersContext must be used inside UsersContextProvider");

  return contextValue;
};

export default UsersContextProvider;
