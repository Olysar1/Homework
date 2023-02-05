import { useCallback, useEffect, useState } from "react";
import { API_KEY } from "../config";

const useFetchData = ({ requestUrl, method }) => {
  const [responseData, setResponseData] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(() => {
    setIsLoading(true);
    fetch(requestUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong!");
        return response.json();
      })
      .then((data) => setResponseData(data))
      .catch((error) => setResponseError(error))
      .finally(() => setIsLoading(false));

    return () => {
      setResponseData(null);
      setResponseError(null);
      setIsLoading(false);
    };
  }, [requestUrl, method]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return { responseData, responseError, isLoading };
};

export default useFetchData;
