import React, { Component } from "react";

//Native Base imports
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Body,
} from "native-base";

//Authentication redux action
import { login } from "../../redux/actions/authentication";

//StyleSheet
import styles from "./styles";

//Screen Names
import { JOBS, JOBSMAP } from "../../Navigation/screenNames";

//Connect
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { username, password } = this.state;
    const { login, navigation } = this.props;
    const redirectToProfile = () => {
      navigation.navigate(JOBS, { screen: JOBSMAP });
    };

    return (
      <Container>
        <Content>
          <Form>
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
                value={password}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
          </Form>
          <Body>
            <Button style={styles.authButton} onPress={() => login(this.state)}>
              <Text full style={{ fontWeight: "bold", color: "white" }}>
                Login
              </Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
