import React, { Component } from "react";

//Native Base
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Body,
  Button,
  Text,
} from "native-base";

//Screen Names
import { JOBS, JOBMAP } from "../../Navigation/screenNames";

//Authentication redux action
import { register } from "../../redux/actions/authentication";

//StyleSheet

import styles from "./styles";

//Connect
import { connect } from "react-redux";

class Register extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    hour_rate: "",
  };

  registerSubmit = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };
    const workerDetail = {
      phone_no: this.state.phone_no,
      hour_rate: this.state.hour_rate,
    };
    const redirectToProfile = () => {
      this.props.navigation.navigate(JOBS, { screen: JOBMAP });
    };
    this.props.register(userData, workerDetail, redirectToProfile);
  };

  render() {
    const {
      username,
      password,
      first_name,
      last_name,
      email,
      phone_no,
      hour_rate,
    } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input
                value={first_name}
                onChangeText={(first_name) => this.setState({ first_name })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input
                value={last_name}
                onChangeText={(last_name) => this.setState({ last_name })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={username}
                onChangeText={(username) => this.setState({ username })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                value={password}
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input
                value={email}
                onChangeText={(email) => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input
                value={phone_no}
                onChangeText={(phone_no) => this.setState({ phone_no })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Hourly Rate</Label>
              <Input
                value={hour_rate}
                onChangeText={(hour_rate) => this.setState({ hour_rate })}
              />
            </Item>

            <Body>
              <Button style={styles.authButton}>
                <Text
                  full
                  style={{ fontWeight: "bold", color: "white" }}
                  onPress={() => this.registerSubmit()}
                >
                  Register
                </Text>
              </Button>
            </Body>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userData, workerDetail, redirect) =>
      dispatch(register(userData, workerDetail, redirect)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
