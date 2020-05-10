import React, { Component } from "react";

//Native Base
import { List, Content, Text, Body } from "native-base";

//Connect
import { connect } from "react-redux";

//Past Jobs Card
import PastJobsCard from "./PastJobsCard";

class PreviousJobs extends Component {
  render() {
    const pendingJobs = this.props.applied_jobs.filter(
      (job) => job.acccepted === false
    );

    const jobsList = pendingJobs.map((job) => (
      <PastJobsCard job={job.job} key={job.job.price} />
    ));
    return (
      <Content>
        {pendingJobs.length !== 0 ? (
          <List>{jobsList}</List>
        ) : (
          <Body>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
              No Pending Jobs!!
            </Text>
          </Body>
        )}
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  applied_jobs: state.jobState.applied_jobs,
});
export default connect(mapStateToProps)(PreviousJobs);
