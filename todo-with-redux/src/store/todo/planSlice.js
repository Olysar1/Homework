import { createSelector, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  planList: [],
};

export const planSlice = createSlice({
  name: "plan",
  initialState: initialState,
  reducers: {
    addPlan: (state, action) => {
      state.planList.push({ plan: action.payload, completed: false, id: v4() });
    },
    deletePlan: (state, action) => {
      const tempArr = state.planList.filter(
        (item) => item.id !== action.payload
      );
      state.planList = tempArr;
    },
    movePlan: (state, action) => {
      const tempArr = state.planList.map((item) => {
        if (item.id === action.payload)
          return { ...item, completed: !item.completed };
        return item;
      });
      state.planList = tempArr;
    },
  },
});

export const { addPlan, deletePlan, movePlan } = planSlice.actions;

export const selectPlan = (state) => state.plan;
export const selectorPlans = createSelector(
  selectPlan,
  (plan) => plan.planList
);

export default planSlice.reducer;
