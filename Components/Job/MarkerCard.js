import React from "react";
import { Text, Card } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { JOBDETAIL } from "../../Navigation/screenNames";

const MarkerCard = ({ marker, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate(JOBDETAIL)}>
    <Card>
      <Text>Job Title : {marker.title}</Text>
      <Text>Name : {marker.name}</Text>
      <Text>Price : {marker.price}</Text>
    </Card>
  </TouchableOpacity>
);

export default MarkerCard;
