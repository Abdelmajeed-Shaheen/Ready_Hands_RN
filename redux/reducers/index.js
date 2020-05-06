import { combineReducers } from "redux";

import userState from "./user";
import jobState from "./jobs";

export default combineReducers({ userState, jobState });
