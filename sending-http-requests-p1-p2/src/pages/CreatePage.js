import { useNavigate } from "react-router-dom";
import Form from "../Form";
import useSendRequest from "../hooks/useSendRequest";

const CreatePage = () => {
  const navigate = useNavigate();
  const { sendRequest } = useSendRequest({
    requestUrl: "/api/v1/users",
    method: "POST",
  });

  const onFormSubmit = (firstName, lastName) => {
    sendRequest([{ firstName, lastName }])
      .then((data) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Form onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default CreatePage;
