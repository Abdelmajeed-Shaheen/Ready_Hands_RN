import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { JOBS, JOBDETAIL } from "../screenNames";
import Jobs from "../../Components/Job/index"; //remove index
import JobDetail from "../../Components/Job/JobDetail/JobDetail";

import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

const JobStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name={JOBS} component={Jobs} />
    <Screen name={JOBDETAIL} component={JobDetail} />
  </Navigator>
);

export default JobStack;
