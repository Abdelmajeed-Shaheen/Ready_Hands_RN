import React from "react";

//Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

//Screen Names
import { AUTHENTICATION, USERINFO } from "../screenNames";

//Authentication
import Authentication from "../../Components/Authentication";

//User Information
import UserInformation from "../../Components/UserInformation";

//Connect
import { connect } from "react-redux";

//Screen Options
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
