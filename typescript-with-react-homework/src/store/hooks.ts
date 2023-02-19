import { AppDispatch, RootState } from "./store";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux/es/exports";

type DispatchFunc = () => AppDispatch;
export const useCustomDispatch: DispatchFunc = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
