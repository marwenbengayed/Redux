import { createStore } from "redux";
import reducer from "./todoReducer";

export const store = createStore(reducer);