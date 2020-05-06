import React from "react";

//Native Base
import { Card, Left, Text, CardItem } from "native-base";

//Touch Opacity
import { TouchableOpacity } from "react-native-gesture-handler";
//Screen Names
import { JOBDETAIL } from "../../../Navigation/screenNames";
//StyleSheet
import styles from "../styles";

const JobCard = ({ navigation, job }) => (
  <TouchableOpacity onPress={() => navigation.navigate(JOBDETAIL, { job })}>
    <Card style={styles.cardjob}>
      <CardItem style={styles.cardHeader}>
        <Left>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{job.title}</Text>
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
            Number of workers :{job.no_of_workers}
          </Text>
        </Left>
      </CardItem>
    </Card>
  </TouchableOpacity>
);
export default JobCard;
