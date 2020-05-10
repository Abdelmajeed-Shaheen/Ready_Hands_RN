import React from "react";

//Native Base
import { Card, Left, Text, CardItem, Body, Right } from "native-base";

//Touch Opacity
import { TouchableOpacity } from "react-native-gesture-handler";
//Screen Names
import { JOBDETAIL } from "../../../Navigation/screenNames";
//StyleSheet
import styles from "../styles";

import moment from "moment";

const JobCard = ({ navigation, job }) => (
  <TouchableOpacity onPress={() => navigation.navigate(JOBDETAIL, { job })}>
    <Card style={styles.cardjob}>
      <CardItem style={styles.cardHeader}>
        <Left>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            {job.title}
          </Text>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Text
            danger
            style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
          >
            Price: {job.price} JD
          </Text>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "black" }}>
            Date: {moment(job.date_from).format("LLLL")}{" "}
          </Text>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Right>
            <Text style={{ fontWeight: "bold", color: "rgb(200,0,0)" }}>
              More Details{" "}
            </Text>
          </Right>
        </Body>
      </CardItem>
    </Card>
  </TouchableOpacity>
);
export default JobCard;
