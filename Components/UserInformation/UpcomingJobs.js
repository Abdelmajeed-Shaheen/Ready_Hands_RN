import React, { Component } from "react";

//Native Base
import { List, Content, Body, Text } from "native-base";

//Connect
import { connect } from "react-redux";

//Up Coming Jobs Card
import UpComingJobsCard from "./UpComingJobsCard";

class UpcomingJobs extends Component {
  render() {
    const acceptedJobs = this.props.applied_jobs.filter(
      (job) => job.acccepted === true
    );

    const jobsList = acceptedJobs.map((job) => (
      <UpComingJobsCard job={job.job} key={job.job.title} />
    ));
    return (
      <Content>
        {acceptedJobs.length === 0 ? (
          <Body>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
              No Accepted Jobs Yet!!
            </Text>
          </Body>
        ) : (
          <List>{jobsList}</List>
        )}
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  applied_jobs: state.jobState.applied_jobs,
});
export default connect(mapStateToProps)(UpcomingJobs);
