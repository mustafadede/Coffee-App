import { StyleSheet } from "react-native";
import { theme1 } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
  container_search: {
    position: "relative",
    width: "100%",
    height: "27%",
    backgroundColor: theme1.lightBrown,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom:20,

  },
  container_header:{
    width: "90%",
    position: "absolute",
    bottom: 24,
    height: 100,
    marginLeft: 24,
    marginRight: 24,
    marginBottom:16,
  },
  container_header_text:{
    width:"80%",
    // marginBottom:16,
  },
  container_header_input:{
    width:"20%",
  },
  header_text_name:{
    fontSize:12,
    color:"white",
    marginBottom:12,
  },
  header_text:{
    fontSize:20,
    color:"white",
    letterSpacing:2,
   
  },

  text: {
    justifyContent: "center",
    textAlign: "center",
  },
  text_input: {
    borderRadius: 24,
    width: "90%",
    position: "absolute",
    bottom: 24,
    height: 42,
    marginLeft: 24,
    marginRight: 24,
    paddingLeft:14,
    backgroundColor: theme1.gray,
  },
  order_items:{
   width:"100%",
   height:"100%",
   backgroundColor:"gray",

  }
});

export default styles;
