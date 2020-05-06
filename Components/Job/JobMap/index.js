import React, { Component } from "react";
//Map Marker
import { Marker } from "react-native-maps";
//Map
import MapView from "react-native-maps";
//Native base
import { Icon, Spinner } from "native-base";
//Marker Card
import MarkerCard from "./MarkerCard";

//Callout in map
import { Callout } from "react-native-maps";
//Screen Names
import { JOBDETAIL } from "../../../Navigation/screenNames";

//Connect
import { connect } from "react-redux";

class JobMap extends Component {
  state = {
    region: {
      latitude: 31.9539,
      longitude: 35.9106,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  render() {
    const { navigation } = this.props;
    if (this.props.loading) return <Spinner color="rgb(70,144,69)" />;

    return (
      <MapView
        value={this.state.region}
        style={{ width: 500, height: 700 }}
        region={this.state.region}
        showsUserLocation={true}
      >
        {this.props.jobs.map((job) => (
          <Marker
            coordinate={{ latitude: job.latitude, longitude: job.longitude }}
            key={job.title}
          >
            <Icon name="map-marker" type="FontAwesome" />
            <Callout onPress={() => navigation.navigate(JOBDETAIL, { job })}>
              <MarkerCard job={job} navigation={navigation} key={job.title} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobState.jobs,
  loading: !state.jobState.jobs.length,
});
export default connect(mapStateToProps)(JobMap);
