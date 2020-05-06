import React from "react";

//Native Base
import { Text, Card, CardItem, Left } from "native-base";
//Touch Opacity
import { TouchableOpacity } from "react-native-gesture-handler";
//Scree Names
import { JOBDETAIL } from "../../../Navigation/screenNames";
//StyleSheet
import styles from "../styles";

import moment from "moment";
const MarkerCard = ({ job, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate(JOBDETAIL, { job })}>
    <Card style={styles.card}>
      <Text style={styles.cardheader}>Job Title: {job.title}</Text>

      <Text style={styles.cardText}>Price/Worker: {job.price} JD</Text>
      <Text style={styles.cardText}>
        Date: {moment(job.date_from).format("LLLL")}{" "}
      </Text>
      <Text style={{ fontWeight: "bold", color: "rgb(200,0,0)" }}>
        More Details...
      </Text>
    </Card>
  </TouchableOpacity>
);

export default MarkerCard;
