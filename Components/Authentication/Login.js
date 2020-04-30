import React, { Component } from "react";
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

import styles from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                value={email}
                onChangeText={(email) => this.setState({ email })}
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
            <Button style={styles.authButton}>
              <Text full style={{ fontWeight: "bold" }}>
                Login
              </Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

export default Login;
