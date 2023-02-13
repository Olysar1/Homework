import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import useRequest from "../hooks/useRequest";
import useFetchData from "../hooks/useFetchData";

const EditTaskPage = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const { responseData, responseError, isLoading, sendRequest } = useFetchData({
    requestUrl: `/api/v1/task/${taskId}`,
  });

  const { request } = useRequest({
    requestUrl: `/api/v1/task/${taskId}`,
    method: "PUT",
  });

  const taskSubmit = (task) => {
    // console.log(task);
    request({ task })
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (isLoading && !responseData) return <h2>Loading...</h2>;
  if (responseError || !responseData) return <h2>Something went wrong</h2>;
  return (
    <div>
      <Form taskSubmit={taskSubmit} />
    </div>
  );
};

export default EditTaskPage;
