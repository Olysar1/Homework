import { combineReducers } from "@reduxjs/toolkit";
import { plansReducer } from "./todo/plan.reducer";

const rootReducer = combineReducers({
  plan: plansReducer,
});

export default rootReducer;
