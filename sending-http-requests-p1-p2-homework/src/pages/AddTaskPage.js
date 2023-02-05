import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import useRequest from "../hooks/useRequest";

const AddTaskPage = () => {
  const navigate = useNavigate();
  const { request } = useRequest({
    requestUrl: "/api/v1/task",
    method: "POST",
  });

  const taskSubmit = (task) => {
    request([{ task: task, status: "planned" }])
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Form taskSubmit={taskSubmit} />
    </div>
  );
};

export default AddTaskPage;
