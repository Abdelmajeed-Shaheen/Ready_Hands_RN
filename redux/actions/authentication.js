//Api Link
import { instance } from "./instance";

//Decode
import decode from "jwt-decode";

//Async Storage
import { AsyncStorage } from "react-native";

//Action Type
import { SET_CURRENT_USER } from "./actionTypes";

const setCurrentUser = (token) => async (dispatch) => {
  let user = null;
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await instance.get(`user/profile/`);
    user = response.data;
  }
  setAuthToken(token);
  dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  });
};

const setAuthToken = async (token) => {
  if (token) {
    await AsyncStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    await AsyncStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await instance.post(`login`, userData);
    const token = response.data.access;
    dispatch(setCurrentUser(token));

    // login doesn't redirect to jobs map/list because you're
    // not calling a redirect() function here
  } catch (error) {
    console.error(error);
  }
};
export const register = (userData, workerDetail, redirect) => async (
  dispatch
) => {
  try {
    const response = await instance.post(`register`, userData);
    const token = response.data.tokens.access;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    await instance.post(`worker/create/`, workerDetail);
    dispatch(setCurrentUser(token));
    redirect();
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => setCurrentUser();

export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("token");

  if (token && decode(token).exp >= currentTimeInSeconds)
    dispatch(setCurrentUser(token));
  else {
    dispatch(setCurrentUser());
    return setAuthToken();
  }
};
