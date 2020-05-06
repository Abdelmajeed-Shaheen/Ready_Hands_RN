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
        {/* when would applied_jobs ever be true? */}
        {/* replace it with `!this.props.applied_jobs ?` */}
        {this.props.applied_jobs === true ? (
          <Body>
            <Text style={{ fontWeight: "bold" }}>
              You Have Not Applied To Any Jobs Yet
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
