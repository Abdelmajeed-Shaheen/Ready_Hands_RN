import React from "react";

//Native Base
import { Card, Left, Text, CardItem } from "native-base";

//StyleSheet
import styles from "./styles";

//Moment for date and time
import moment from "moment";

const PastJobsCard = ({ job }) => (
  <Card style={styles.prevcard}>
    <CardItem style={styles.prevcardHeader}>
      <Left>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{job.title}</Text>
      </Left>
    </CardItem>
    <CardItem>
      <Left>
        <Text
          danger
          style={{ fontWeight: "bold", fontSize: 16, color: "gray" }}
        >
          Price: {job.price} JD
        </Text>
      </Left>
    </CardItem>
    <CardItem>
      <Left>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "gray" }}>
          Number of workers :{job.no_of_workers}
        </Text>
      </Left>
    </CardItem>
    <CardItem>
      <Left>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "gray" }}>
          Date: {moment(job.date_to).format("dddd MMMM  YYYY, h:mm:ss a")}
        </Text>
      </Left>
    </CardItem>
  </Card>
);
export default PastJobsCard;
