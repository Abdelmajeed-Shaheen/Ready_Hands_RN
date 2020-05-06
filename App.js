import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigation/index";

import store from "./redux";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
