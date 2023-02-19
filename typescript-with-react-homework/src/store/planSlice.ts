import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { RootState } from "./store";

interface PlanObjectType {
  planList: { plan: string; isDone: boolean; id: string }[];
}

const initialState: PlanObjectType = {
  planList: [],
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    addPlan: (state, action): void => {
      state.planList.push({ plan: action.payload, isDone: false, id: v4() });
    },
    deletePlan: (state, action: PayloadAction<string>): void => {
      const tempArr = state.planList.filter(
        (item) => item.id !== action.payload
      );
      state.planList = tempArr;
    },
    movePlan: (state, action: PayloadAction<string>) => {
      const tempArr = state.planList.map((item) => {
        if (item.id === action.payload)
          return { ...item, isDone: !item.isDone };
        return item;
      });
      state.planList = tempArr;
    },
  },
});

export const { addPlan, deletePlan, movePlan } = planSlice.actions;

export const selectPlan = (state: RootState) => state.plan;
export const selectorPlans = createSelector(
  selectPlan,
  (plan) => plan.planList
);

export default planSlice.reducer;
