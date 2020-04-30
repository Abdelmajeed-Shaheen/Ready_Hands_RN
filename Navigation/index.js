import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import screenOptions from "./screenOptions";

import { Icon } from "native-base";

import UserStack from "./StackNavigators/UserStack";
import JobStack from "./StackNavigators/JobStack";
import { USER, JOBS } from "./screenNames";

const { Navigator, Screen } = createBottomTabNavigator();

const RootTabNavigator = () => (
  <Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        backgroundColor: "black",
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName = "";
        switch (route.name) {
          case USER:
            iconName = "account-box";
            break;

          case JOBS:
            iconName = "work";
            break;
        }
        return <Icon name={iconName} type="MaterialIcons" style={{ color }} />;
      },
    })}
  >
    <Screen name={USER} component={UserStack} screenOptions={screenOptions} />
    <Screen name={JOBS} component={JobStack} screenOptions={screenOptions} />
  </Navigator>
);

export default RootTabNavigator;
