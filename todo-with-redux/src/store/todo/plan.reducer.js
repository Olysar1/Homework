import { v4 } from "uuid";

const PLANS_INITIAL_STATE = {
  planList: [],
};

export const plansReducer = (state = PLANS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD":
      return {
        planList: [
          ...state.planList,
          { plan: action.payload, completed: false, id: v4() },
        ],
      };
    case "DELETE":
      return {
        planList: state.planList.filter((i) => i.id !== action.payload),
      };
    case "MOVE":
      return {
        planList: state.planList.map((item) => {
          if (item.id === action.payload)
            return { ...item, completed: !item.completed };
          return item;
        }),
      };
    default:
      return state;
  }
};
