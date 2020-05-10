import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dtitle: {
    backgroundColor: "white",
    color: "#00838f",
    paddingTop: 10,
    fontSize: 20,
    marginTop: 1,
    paddingRight: 100,
  },
  title: {
    backgroundColor: "white",
    color: "#00838f",
    paddingTop: 10,
    fontSize: 20,
    marginTop: 10,
  },
  detail: {
    marginTop: 10,
    backgroundColor: "white",
    color: "#00838f",
    fontSize: 20,
    paddingTop: 0,
    marginBottom: 10,
  },
  card: {
    height: 130,
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
    borderTopWidth: 4,
    borderBottomWidth: 1,
  },
  cardHeader: {
    backgroundColor: "#00838f",
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
    backgroundColor: "white",
  },
});

export default styles;
