import React, { Component } from "react";
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

import styles from "./styles";

class Register extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  };

  render() {
    const { username, password, first_name, last_name, email } = this.state;
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
            <Body>
              <Button style={styles.authButton}>
                <Text full style={{ fontWeight: "bold" }}>
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

export default Register;
