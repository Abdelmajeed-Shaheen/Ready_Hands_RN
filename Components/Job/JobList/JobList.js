import React, { Component } from "react";
//NativeBase
import { List, Content, Spinner, Header, Item, Icon, Input } from "native-base";
//Job Card
import JobCard from "./JobCard";
//Connect
import { connect } from "react-redux";
import { getJobs } from "../../../redux/actions";

import styles from "../styles";

class JobList extends Component {
  state = {
    query: "",
    text: "",
  };

  setQuery = (query, text) => this.setState({ query, text });

  filterJobs = () => {
    const query = this.state.query.toLowerCase();
    return this.props.jobs.filter((job) => {
      return `${job.title}`.toLowerCase().includes(query);
    });
  };
  render() {
    if (this.props.loading) return <Spinner color="rgb(70,144,69)" />;

    const { navigation } = this.props;
    const jobsList = this.filterJobs().map((job) => (
      <JobCard job={job} key={job.id} navigation={navigation} />
    ));
    return (
      <Content>
        <Header searchBar rounded style={styles.background}>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search in jobs"
              onChangeText={this.setQuery}
              value={this.state.query}
            />
            <Icon name="close" onPress={() => this.setState({ query: "" })} />
          </Item>
        </Header>
        <List>{jobsList}</List>
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobState.jobs,
  loading: !state.jobState.jobs.length,
});

export default connect(mapStateToProps)(JobList);
