import { Link } from "react-router-dom";
import { themeIdToStringMap, useThemeContext } from "../contexts/ThemeContext";
import { useUsersContext } from "../contexts/UserContext";

const MainPage = () => {
  const { isDataLoading, isDeleteLoading, userList, deleteUser } =
    useUsersContext();

  const { themeCode } = useThemeContext();

  if (isDeleteLoading || isDataLoading) return <p>Loading...</p>;

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
      <p>{themeIdToStringMap[themeCode]}</p>
    </div>
  );
};

export default MainPage;
