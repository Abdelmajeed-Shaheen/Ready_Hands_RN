import React from "react";

import Register from "./Register";
import Login from "./Login";
import { LOGIN, REGISTER } from "../../Navigation/screenNames";
import { Container, Tab, Tabs, TabHeading, Text, Icon } from "native-base";
import styles from "./styles";

const Authentication = () => (
  <Container>
    <Tabs>
      <Tab
        heading={
          <TabHeading style={{ backgroundColor: "black" }}>
            <Icon name="ios-paper" type="Ionicons" />
            <Text>{REGISTER}</Text>
          </TabHeading>
        }
        tabStyle={{ backgroundColor: "red" }}
        textStyle={{ color: "#fff" }}
        activeTabStyle={{ backgroundColor: "red" }}
        activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
      >
        <Register />
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
            <Icon name="login" type="Entypo" />
            <Text>{LOGIN}</Text>
          </TabHeading>
        }
        tabStyle={{ backgroundColor: "rgb(300,91,28)" }}
      >
        <Login />
      </Tab>
    </Tabs>
  </Container>
);

export default Authentication;
