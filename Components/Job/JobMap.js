import React, { Component } from "react";
import { Marker, MyCustomMarkerView } from "react-native-maps";
import MapView from "react-native-maps";
import { Icon, Card } from "native-base";
import { JOBDETAIL } from "../../Navigation/screenNames";
import MarkerCard from "./MarkerCard";

class JobMap extends Component {
  state = {
    region: {
      latitude: 32.0272548,
      longitude: 35.8739248,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    markers: [
      {
        latlng: { latitude: 32.0272548, longitude: 35.8739248 },
        title: "House Keeper",
        name: "Laijo",
        price: "50 JD",
      },
      {
        latlng: { latitude: 32.028342, longitude: 35.871567 },
        title: "Baby Sitter",
        name: "Amani",
        price: "20 JD",
      },
      {
        latlng: { latitude: 32.029332, longitude: 35.869359 },
        title: "Waiter",
        name: "Ahmad",
        price: "40 JD",
      },
    ],
  };

  render() {
    const { navigation } = this.props;
    return (
      <MapView
        value={this.state.region}
        style={{ width: 500, height: 700 }}
        region={this.state.region}
      >
        {this.state.markers.map((marker) => (
          <Marker coordinate={marker.latlng}>
            <Icon name="map-marker" type="FontAwesome" />
            <MarkerCard {...marker} marker={marker} navigation={navigation} />
          </Marker>
        ))}
      </MapView>
    );
  }
}

export default JobMap;
