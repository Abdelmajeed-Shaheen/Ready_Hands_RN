import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AUTHENTICATION } from "../screenNames";
import Authentication from "../../Components/Authentication/index";
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

const UserStack = () => (
  <Navigator screenOptions={screenOptions}>
    <Screen name={AUTHENTICATION} component={Authentication} />
  </Navigator>
);

export default UserStack;
