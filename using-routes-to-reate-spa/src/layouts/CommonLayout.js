import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const CommonLayout = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is common layout. Number of count: {count}</h1>
      <Link to="/common-layout/find-me">Find Me</Link>
      <Outlet context={{ setCount }} />
    </div>
  );
};

export default CommonLayout;
