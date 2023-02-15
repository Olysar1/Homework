export const addToPlansAction = (payload) => {
  return {
    type: "ADD",
    payload: payload,
  };
};

export const deletePlanAction = (payload) => {
  return {
    type: "DELETE",
    payload: payload,
  };
};

export const movePlanAction = (payload) => {
  return {
    type: "MOVE",
    payload: payload,
  };
};
