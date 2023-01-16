import React, { Component } from "react";
import "./App.css";
import User from "./User";

class App extends Component {
  state = {
    users: [{ name: "User 1" }, { name: "User 2" }],
  };

  onChange = (event, index) => {
    const users = [...this.state.users];
    users[index] = { name: event.target.value };
    this.setState({ users });
  };

  addUser = () => {
    const users = [...this.state.users];
    users.push({ name: "your name" });
    this.setState({ users }, () => console.log("set state finished"));
    console.log("After setState: ", this.state);
  };

  removeUser = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users });
  };

  render() {
    console.log("render: ", this.state);
    return (
      <div className="users">
        {this.state.users.map((item, index) => {
          return (
            <User
              key={index}
              name={item.name}
              onChange={(event) => this.onChange(event, index)}
              removeUser={() => this.removeUser(index)}
            />
          );
        })}
        <button onClick={this.addUser}>Add User</button>
      </div>
    );
  }
}
export default App;
