import React from "react";

//Native Base
import { Button, Text, Icon, Content, Body } from "native-base";

//Connect
import { connect } from "react-redux";

//Authentication redux action
import { logout } from "../../redux/actions/authentication";

const LogoutButton = ({ logout }) => (
  <Content>
    <Body>
      <Button
        style={{ marginBottom: 5, backgroundColor: "#CC1111" }}
        onPress={logout}
      >
        <Icon
          style={{
            color: "white",
          }}
          name="logout"
          type="MaterialCommunityIcons"
        />
        <Text style={{ color: "white", fontWeight: "bold" }}>Logout</Text>
      </Button>
    </Body>
  </Content>
);

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(LogoutButton);
