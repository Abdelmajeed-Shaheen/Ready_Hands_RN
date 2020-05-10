import React from "react";

//Bottom Tab Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen Options
import screenOptions from "./screenOptions";

//Native Base
import { Icon } from "native-base";

//Connect
import { connect } from "react-redux";

//Stack Navigators
import UserStack from "./StackNavigators/UserStack";
import JobStack from "./StackNavigators/JobStack";

//Screen Names
import { USER, JOBS } from "./screenNames";

const { Navigator, Screen } = createBottomTabNavigator();

const RootTabNavigator = ({ user }) => (
  <Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: "#00838f",
      inactiveTintColor: "#DCDCDC",
      style: {
        backgroundColor: "white",
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
    {user && (
      <Screen name={JOBS} component={JobStack} screenOptions={screenOptions} />
    )}
  </Navigator>
);
const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(RootTabNavigator);
