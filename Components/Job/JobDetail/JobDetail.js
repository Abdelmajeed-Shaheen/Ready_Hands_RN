import React, { Component } from "react";

//Native Base
import {
  Text,
  Card,
  CardItem,
  Icon,
  Left,
  Right,
  Content,
  Body,
  Button,
  Title,
  Header,
} from "native-base";

//Map Marker
import { Marker } from "react-native-maps";

//Map
import MapView from "react-native-maps";

import { applyToJob } from "../../../redux/actions";
//Image
import { Image } from "react-native";
//StyleSheet
import styles from "../../Job/styles";

//Screen Names
import { JOBS, PREVJOBS, USERINFO } from "../../../Navigation/screenNames";
import { Alert } from "react-native-alert-dialogues";

//Connect
import { connect } from "react-redux";

//Moment for date and time
import moment from "moment";

class JobDetail extends Component {
  state = {
    region: {
      latitude: 31.9539,
      longitude: 35.9106,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },

    followsUserLocation: true,
  };

  render() {
    const { navigation, applyToJob } = this.props;
    const { job } = this.props.route.params;
    const appliedList = this.props.applied_jobs.filter(
      (applied_job) => applied_job.job.id === job.id
    );
    return (
      <Content>
        <Header style={styles.title}>
          <Left>
            <Button
              style={styles.detail}
              onPress={() => navigation.navigate(JOBS)}
            >
              <Icon style={styles.detail} name="arrow-back" />
            </Button>
          </Left>
          <Left>
            <Title style={styles.title}>Job Details</Title>
          </Left>
        </Header>
        <Card>
          <CardItem>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {job.title}
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Client Name: {job.client.user.first_name}{" "}
                {job.client.user.last_name}
              </Text>
            </Left>
            <Right>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Service: {job.service.title}
              </Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <MapView
                value={this.state.region}
                style={{ width: 500, height: 200 }}
                region={this.state.region}
                loadingEnabled={true}
                tintColor={"red"}
              >
                <Marker
                  coordinate={{
                    latitude: job.latitude,
                    longitude: job.longitude,
                  }}
                  key={job.title}
                >
                  <Icon name="map-marker" type="FontAwesome" />
                </Marker>
              </MapView>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Price: {job.price} JD
              </Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                From : {moment(job.date_from).format("LLLL")}
              </Text>
            </Left>
            <Right>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                To : {moment(job.date_to).format("LLLL")}
              </Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Workers Needed : {job.no_of_workers}
              </Text>
            </Left>
          </CardItem>

          <CardItem>
            <Body>
              {appliedList.length === 0 ? (
                <Button
                  full
                  style={{
                    backgroundColor: "#669999",
                    borderRadius: "10",
                  }}
                  onPress={() => applyToJob(job.id)}
                >
                  <Text full style={{ fontWeight: "bold", color: "white" }}>
                    Apply
                  </Text>
                </Button>
              ) : (
                <Text style={{ fontWeight: "bold", color: "rgb(0,130,0)" }}>
                  {" "}
                  Successfully Applied
                </Text>
              )}
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    applied_jobs: state.jobState.applied_jobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    applyToJob: (job_id) => dispatch(applyToJob(job_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
