import React, { Component } from "react";

//Authentication
import Register from "./Register";
import Login from "./Login";
import { LOGIN, REGISTER } from "../../Navigation/screenNames";

//Native Base
import {
  Container,
  TabHeading,
  Title,
  Tab,
  Icon,
  Tabs,
  Text,
} from "native-base";

//StyleSheet
import styles from "./styles";

//Connect
import { connect } from "react-redux";

class Authentication extends Component {
  state = {
    activePage: 2,
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Title style={styles.title}>Authentication</Title>
        <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 4 }}>
          <Tab
            active={this.state.activePage === 1}
            heading={
              <TabHeading
                style={{
                  backgroundColor: "#00838f",
                  activeTextStyle: "black",
                  activeTabStyle: "red",
                  underlineStyle: "white",
                }}
              >
                <Icon
                  name="ios-paper"
                  type="Ionicons"
                  style={{
                    color: this.state.activePage == 1 ? "white" : "black",
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {REGISTER}
                </Text>
              </TabHeading>
            }
          >
            <Register navigation={navigation} />
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "#00838f",
                  activeTextStyle: "black",
                  activeTabStyle: "red",
                }}
              >
                <Icon
                  style={{
                    color: "black",
                  }}
                  name="login"
                  type="Entypo"
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {LOGIN}
                </Text>
              </TabHeading>
            }
          >
            <Login navigation={navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(Authentication);
