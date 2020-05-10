import React from "react";

//Native Base
import {
  Card,
  CardItem,
  Text,
  Thumbnail,
  Spinner,
  Icon,
  Left,
  Button,
} from "native-base";

import StarRating from "react-native-star-rating";

//StyleSheet
import styles from "./styles";

//Connect
import { connect } from "react-redux";

//Logout Button
import LogoutButton from "./LogoutButton";

const uri =
  "https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/49253461_10214911948566406_7284618671249424384_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_eui2=AeHsBQite151AJZ88oAQZtCdsKoxygslJ4uwqjHKCyUni7_O3nW-uQenMZuHEx1g-7g&_nc_ohc=lGO5FOduZ6UAX_4Q2pK&_nc_ht=scontent.famm9-1.fna&oh=8d2b12f91339cfeaa806762ced9d4db4&oe=5ED96E91";
const Profile = ({ user, navigation, loading }) => {
  if (loading) return <Spinner color="rgb(70,144,69)" />;

  return (
    <Card>
      <CardItem>
        <Thumbnail large source={{ uri: uri }} />
      </CardItem>
      <CardItem>
        <Text style={styles.profileText}>
          {user.user.first_name} {user.user.last_name}
        </Text>
      </CardItem>
      <CardItem>
        <Icon name="email" type="MaterialIcons" style={styles.iconColor} />

        <Text style={styles.profileText}> essamabuissa@hotmail.com</Text>
      </CardItem>
      <CardItem>
        <Icon name="phone" type="FontAwesome" style={styles.iconColor} />

        <Text style={styles.profileText}> {user.phone_no}</Text>
      </CardItem>
      <CardItem>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={parseInt(user.rating)}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          fullStarColor="gold"
        />
      </CardItem>
      <CardItem>
        <LogoutButton navigation={navigation} />
      </CardItem>
      <Left></Left>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
  loading: !state.userState.user,
});
export default connect(mapStateToProps)(Profile);
