const User = ({ name, onChange, removeUser }) => {
  return (
    <div className="user-item">
      <input type="text" value={name} onChange={onChange} />
      <p>Name: {name}</p>
      <button onClick={removeUser}>Remove This User</button>
    </div>
  );
};

export default User;
