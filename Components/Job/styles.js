import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#669999",
    color: "black",
    paddingTop: 10,
    fontSize: 20,
    marginTop: 1,
  },
  detail: {
    marginTop: 10,
    backgroundColor: "#669999",
    color: "white",
    fontSize: 20,
    paddingTop: 0,
    marginBottom: 10,
  },
  card: {
    height: 120,
    width: 240,
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderRadius: 10,
    borderBottomColor: "rgb(192,192,192)   ",
    borderLeftColor: "rgb(192,192,192)   ",
  },

  cardjob: {
    elevation: 10,
    borderStyle: "solid",
    borderBottomColor: "rgb(192,192,192)   ",
    borderLeftColor: "rgb(192,192,192)   ",
  },
  cardHeader: {
    backgroundColor: "#669999",
    fontSize: 17,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  cardheader: {
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "white",
  },

  activeTabStyle: {
    color: "red",
  },
  underlineStyle: {
    color: "white",
  },
  background: {
    backgroundColor: "#669999",
  },
});

export default styles;
