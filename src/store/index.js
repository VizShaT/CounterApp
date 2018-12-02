import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  days: 15,
  hours: 10,
  minutes: 27,
  seconds: 11,
  activeSession: "DAYS"
};

const store = createStore(reducer, initialState);

export default store;
