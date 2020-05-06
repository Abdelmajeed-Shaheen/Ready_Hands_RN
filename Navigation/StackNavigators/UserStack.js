import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AUTHENTICATION, USERINFO } from "../screenNames";
import Authentication from "../../Components/Authentication/index"; // remove index
import UserInformation from "../../Components/UserInformation/index"; // remove index
import { connect } from "react-redux";

import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

const UserStack = ({ user }) => (
  <Navigator screenOptions={screenOptions}>
    {user ? (
      <Screen name={USERINFO} component={UserInformation} />
    ) : (
      <Screen name={AUTHENTICATION} component={Authentication} />
    )}
  </Navigator>
);

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(UserStack);
