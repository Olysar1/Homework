import { useNavigate, useParams } from "react-router-dom";
import Form from "../Form";
import useFetchData from "../hooks/useFetchData";
import useSendRequest from "../hooks/useSendRequest";

const UpdatePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { responseData, responseError, isLoading } = useFetchData({
    requestUrl: `/api/v1/users/${userId}`,
  });

  const { sendRequest } = useSendRequest({
    requestUrl: `/api/v1/users/${userId}`,
    method: "PUT",
  });

  const onFormSubmit = (firstName, lastName) => {
    sendRequest({ firstName, lastName })
      .then((data) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  if (isLoading && !responseData) return <p>Loading...</p>;

  if (responseError || !responseData) return <p>Something went wrong...</p>;
  return (
    <div>
      <Form
        onFormSubmit={onFormSubmit}
        firstName={responseData.firstName}
        lastName={responseData.lastName}
      />
    </div>
  );
};

export default UpdatePage;
