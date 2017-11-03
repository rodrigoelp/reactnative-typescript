import { StyleSheet } from "react-native";

const colorAppBackground = "#66BFBF";
const colorHeaderBackground = "#F76B8A";
const colorHeader = "#FCFEFE";
const colorItemBackground = "#EAF6F6";
const colorItem = "#66BFBF";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colorAppBackground,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
  },
  header: {
    backgroundColor: "silver",
  },
  title: {
    color: "white",
    fontSize: 30,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8
  },
  item: {
    fontSize: 16,
  },
  info: {
    fontSize: 8,
    paddingBottom: 4,
  }
});

export default styles;