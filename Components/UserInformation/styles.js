import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  iconColor: {
    color: "#669999",
  },
  title: {
    backgroundColor: "#669999",
    color: "black",
    paddingTop: 10,
    fontSize: 20,
    marginTop: 2,
  },

  prevcard: {
    elevation: 10,
    borderStyle: "solid",
    borderBottomWidth: 10,
    borderRadius: 20,
    borderBottomColor: "rgb(192,192,192)   ",
    borderLeftColor: "rgb(192,192,192)   ",
  },
  prevcardHeader: {
    backgroundColor: "#CC1111",
  },

  upcomingcard: {
    elevation: 10,
    borderStyle: "solid",
    borderBottomWidth: 10,
    borderRadius: 20,
    borderBottomColor: "rgb(192,192,192)   ",
    borderLeftColor: "rgb(192,192,192)   ",
  },
  upcomingcardHeader: {
    backgroundColor: "green",
  },

  indicatorStyle: {
    backgroundColor: "green",
  },
});

export default styles;
