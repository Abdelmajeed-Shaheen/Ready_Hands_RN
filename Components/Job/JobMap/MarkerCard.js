import React from "react";

//Native Base
import { Text, Card, CardItem, Left } from "native-base";
//Touch Opacity
import { TouchableOpacity } from "react-native-gesture-handler";
//Scree Names
import { JOBDETAIL } from "../../../Navigation/screenNames";
//StyleSheet
import styles from "../styles";

const MarkerCard = ({ job, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate(JOBDETAIL, { job })}>
    <Card style={styles.card}>
      <Text style={styles.cardHeader}>{job.title}</Text>

      <Text style={styles.cardText}>Price/Worker: {job.price} JD</Text>
      <Text style={styles.cardText}>Workers: {job.no_of_workers} </Text>
    </Card>
  </TouchableOpacity>
);

export default MarkerCard;
