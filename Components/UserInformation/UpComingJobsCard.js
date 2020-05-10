import React from "react";

//Native Base
import { Card, Left, Text, CardItem, Right, Body } from "native-base";

//StyleSheet
import styles from "./styles";

//Moment for date and time
import moment from "moment";

const UpComingJobsCard = ({ job }) => (
  <Card style={styles.upcomingcard}>
    <CardItem style={styles.upcomingcardHeader}>
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
          Number of workers :{job.no_of_workers}
        </Text>
      </Left>
    </CardItem>
    <CardItem>
      <Left>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "black" }}>
          Date: {moment(job.date_to).format("LLLL")}
        </Text>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Right>
          <Text style={{ fontWeight: "bold", color: "rgb(0,130,0)" }}>
            Accepted
          </Text>
        </Right>
      </Body>
    </CardItem>
  </Card>
);
export default UpComingJobsCard;
