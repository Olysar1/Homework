import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import useSendRequest from "../hooks/useSendRequest";

const MainPage = () => {
  const {
    responseData,
    resendRequest,
    isLoading: isDataLoading,
  } = useFetchData({
    requestUrl: "/api/v1/users",
    method: "GET",
  });
  const userList =
    responseData?.items.map((item) => ({
      firstName: item.firstName,
      lastName: item.lastName,
      id: item._uuid,
    })) || [];

  const { sendRequest, isLoading } = useSendRequest({ method: "DELETE" });

  const deleteUser = (userId) => {
    sendRequest(null, `/api/v1/users/${userId}`)
      .then(() => {
        resendRequest();
      })
      .catch((error) => console.error(error));
  };

  if (isLoading || isDataLoading) return <p>Loading...</p>;

  return (
    <div>
      {userList.map((user) => (
        <p key={user.id}>
          <span>
            {user.firstName}, {user.lastName}
          </span>
          <Link to={`/user/${user.id}`}>Edit</Link>
          <button
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default MainPage;
