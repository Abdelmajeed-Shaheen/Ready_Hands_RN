import React, { Component } from "react";

//Screen Names
import {
  PREVJOBS,
  UPCOMINGJOBS,
  PROFILE,
  USERINFO,
} from "../../Navigation/screenNames";

//Native Base
import {
  Container,
  TabHeading,
  Title,
  Tabs,
  Icon,
  Tab,
  Spinner,
  Text,
} from "native-base";

import { getWorkerAppliedJobs } from "../../redux/actions/jobs";

//StyleSheet
import styles from "./styles";

//Profile
import Profile from "./Profile";

//Connect
import { connect } from "react-redux";

//Previous Jobs
import PreviousJobs from "./PreviousJobs";

//Up Coming Jobs
import UpcomingJobs from "./UpcomingJobs";

class UserInformation extends Component {
  state = {
    activePage: 1,
  };

  componentDidMount = () => {
    if (this.props.user) this.setState({ loading: false });
  };
  render() {
    this.props.getWorkerAppliedJobs();

    return (
      <Container>
        <Title style={styles.title}>{USERINFO}</Title>
        <Tabs
          tabBarUnderlineStyle={{
            borderBottomWidth: 5,
            borderBottomColor: "#00838f",
          }}
        >
          <Tab
            heading={
              <TabHeading
                active
                style={{
                  backgroundColor: "white",
                  activeTextStyle: "#00838f",
                  activeTabStyle: "red",
                }}
              >
                <Text
                  style={{
                    color: "#00838f",
                    fontWeight: "bold",
                  }}
                >
                  {PROFILE}
                </Text>
              </TabHeading>
            }
          >
            <Profile />
          </Tab>

          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "white",
                  activeTextStyle: "black",
                  activeTabStyle: "red",
                  underlineStyle: "white",
                }}
              >
                <Text
                  style={{
                    color: "#00838f",
                    fontWeight: "bold",
                  }}
                >
                  {PREVJOBS}
                </Text>
              </TabHeading>
            }
          >
            <PreviousJobs />
          </Tab>
          <Tab
            heading={
              <TabHeading
                style={{
                  backgroundColor: "white",
                  activeTextStyle: "black",
                  activeTabStyle: "red",
                }}
              >
                <Text
                  style={{
                    color: "#00838f",
                    fontWeight: "bold",
                  }}
                >
                  {UPCOMINGJOBS}
                </Text>
              </TabHeading>
            }
          >
            <UpcomingJobs />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getWorkerAppliedJobs: () => dispatch(getWorkerAppliedJobs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
