import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContent: {
    //width:"90%",
    //height:"auto",
    backgroundColor: "white",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  contextLeft: {
    width: "85%",
    alignItems: "flex-start",
  },
  contextRigth: {
    width: "200%",
    backgroundColor: "transparent",
  },
  boxLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginRight: 5,
  },
  dayCotation: {
    fontSize: 14,
    paddingLeft: 2,
    color: "#000000",
    //fontWeight:"bold",
  },

  price: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteLogo: {
    width: 15,
    height: 20,
    marginLeft: 20,
  },
  total: {
    paddingTop: 15,
  },
  //
});

export default styles;
