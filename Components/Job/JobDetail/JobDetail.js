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
  Footer,
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
            <Title>
              <Text style={styles.dtitle}>Job Details</Text>
            </Title>
          </Left>
        </Header>
        <Card style={{ borderBottomWidth: 8 }}>
          <CardItem>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#00838f" }}
            >
              {job.title}
            </Text>
          </CardItem>
          <Card>
            <CardItem>
              <Left>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Client: {job.client.user.first_name}{" "}
                  {job.client.user.last_name}
                </Text>
              </Left>
              <Right>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Service: {job.service.title}
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <MapView
                value={this.state.region}
                style={{
                  width: 350,
                  height: 200,
                  marginLeft: -8,
                  borderBottomWidth: 8,
                }}
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
            </CardItem>
          </Card>

          <CardItem>
            <Left>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "#00838f" }}
              >
                Price: {job.price} JD
              </Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                From : {moment(job.date_from).format("LLLL")}
              </Text>
            </Left>
            <Right>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                To : {moment(job.date_to).format("LLLL")}
              </Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
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
                    backgroundColor: "#00838f",
                    borderRadius: "10",
                  }}
                  onPress={() => applyToJob(job.id)}
                >
                  <Text full style={{ fontWeight: "bold", color: "white" }}>
                    Apply
                  </Text>

                  <Icon name="checkcircleo" type="AntDesign" />
                </Button>
              ) : (
                <Left>
                  <Text style={{ fontWeight: "bold", color: "rgb(0,130,0)" }}>
                    Successfully Applied
                  </Text>
                </Left>
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
