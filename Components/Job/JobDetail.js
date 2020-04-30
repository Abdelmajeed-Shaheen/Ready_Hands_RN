import React, { Component } from "react";
import {
  Text,
  Card,
  CardItem,
  Icon,
  Left,
  Right,
  Content,
  Body,
  View,
} from "native-base";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import { Image } from "react-native";

class JobDetail extends Component {
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
        price: "10 JD",
      },
    ],
  };

  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
              House Keeper needed for 2 days
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Laijo</Text>
            </Left>
            <Right>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                House Keeper
              </Text>
            </Right>
          </CardItem>
          <CardItem>
            <MapView
              value={this.state.region}
              style={{ width: 500, height: 200 }}
              region={this.state.region}
            >
              {this.state.markers.map((marker) => (
                <Marker coordinate={marker.latlng}>
                  <Icon name="map-marker" type="FontAwesome" />
                </Marker>
              ))}
            </MapView>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Price : 50 JD
              </Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                From : 02/02/2020
              </Text>
            </Left>
            <Right>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                To : 04/02/2020
              </Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Workers Needed : 2
              </Text>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Rating</Text>
              <Image
                source={require("../../assets/stars.png")}
                style={{ height: 80 }}
              />
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
export default JobDetail;
