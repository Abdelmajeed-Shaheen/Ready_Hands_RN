import React from "react";

import JobMap from "./JobMap";
import JobList from "./JobList";
import { JOBLIST, JOBMAP } from "../../Navigation/screenNames";
import { Container, Tab, Tabs, TabHeading, Text, Icon } from "native-base";

const Jobs = ({ navigation }) => (
  <Container>
    <Tabs>
      <Tab
        heading={
          <TabHeading
            style={{
              backgroundColor: "black",
              activeTextStyle: "black",
              activeTabStyle: "red",
            }}
          >
            <Icon name="map" type="FontAwesome5" />
            <Text>{JOBMAP}</Text>
          </TabHeading>
        }
      >
        <JobMap navigation={navigation} />
      </Tab>
      <Tab
        heading={
          <TabHeading
            style={{
              backgroundColor: "black",
              activeTextStyle: "black",
              activeTabStyle: "red",
            }}
          >
            <Icon name="work" type="MaterialIcons" />
            <Text>{JOBLIST}</Text>
          </TabHeading>
        }
      >
        <JobList navigation={navigation} />
      </Tab>
    </Tabs>
  </Container>
);

export default Jobs;
