import React from "react";

//Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

//Screen Names
import { JOBS, JOBDETAIL } from "../screenNames";

//Jobs
import Jobs from "../../Components/Job";

//Job Detail
import JobDetail from "../../Components/Job/JobDetail/JobDetail";

const { Navigator, Screen } = createStackNavigator();

const JobStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name={JOBS} component={Jobs} />
    <Screen name={JOBDETAIL} component={JobDetail} />
  </Navigator>
);

export default JobStack;
