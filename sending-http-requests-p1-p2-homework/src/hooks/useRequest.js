import { useState } from "react";
import { API_KEY } from "../config";

const useRequest = ({ requestUrl, method }) => {
  const [isLoading, setIsLoading] = useState(false);

  const request = async (taskInfo) => {
    setIsLoading(true);
    const response = await fetch(requestUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body:
        method !== "GET" && !!taskInfo ? JSON.stringify(taskInfo) : undefined,
    });
    const data = await response.json();
    setIsLoading(false);

    return data;
    //   .then((response) => {
    //     if (!response.ok) throw new Error("Something went wrong");
    //     return response.json();
    //   })
    //   .then((data) => {
    //     const plan = data.items[0];
    //   })
    //   .catch((error) => console.error(error));
  };

  return { request, isLoading };
};

export default useRequest;
