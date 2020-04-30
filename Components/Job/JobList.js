import React from "react";
import { List, Content } from "native-base";
import JobCard from "./JobCard";

const JobList = ({ navigation }) => (
  <Content>
    <List>
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
      <JobCard navigation={navigation} />
    </List>
  </Content>
);
export default JobList;
