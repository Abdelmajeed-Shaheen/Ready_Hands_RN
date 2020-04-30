import React from "react";

import { Card, ListItem, Left, Text, CardItem } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { JOBDETAIL } from "../../Navigation/screenNames";

const JobCard = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate(JOBDETAIL)}>
    <Card>
      <CardItem>
        <Left>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            House keeper needed for two days
          </Text>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Price : 20 JD
          </Text>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Number of workers : 2
          </Text>
        </Left>
      </CardItem>
    </Card>
  </TouchableOpacity>
);
export default JobCard;
