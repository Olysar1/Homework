import { useState, useCallback, useEffect } from "react";
import "./App.css";
import User from "./User";

const App = () => {
  const [users, setUsers] = useState([{ name: "user1" }, { name: "user2" }]);

  const addUser = useCallback(() => {
    // const userList = [...users];
    // userList.push({ name: "type user name" });
    // setUsers(userList);
    setUsers((users) => {
      const userList = [...users];
      userList.push({ name: "type user name" });
      return userList;
    });
  }, []);

  const onChange = useCallback((event, index) => {
    // const userList = [...users];
    // userList[index] = { name: event.target.value };
    // setUsers(userList);
    setUsers((users) => {
      const userList = [...users];
      userList[index] = { name: event.target.value };
      return userList;
    });
  }, []);

  const removeUser = useCallback((index) => {
    // const userList = [...users];
    // userList.splice(index, 1);
    // setUsers(userList);
    setUsers((users) => {
      const userList = [...users];
      userList.splice(index, 1);
      return userList;
    });
  }, []);

  useEffect(() => {
    // console.log("useEffect called");
    document.title = `you have ${users.length} users`;
  }, [users.length]);

  return (
    <div className="users">
      {users.map((user, index) => {
        return (
          <User
            key={index}
            name={user.name}
            onChange={onChange}
            removeUser={removeUser}
            index={index}
          />
        );
      })}
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default App;
