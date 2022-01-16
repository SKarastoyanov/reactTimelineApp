import { StyleSheet } from "react-native"

  const styles = StyleSheet.create({
    header: {
      textAlign: "center",
      color: "gray",
      fontSize: 22,
      padding: 10,
    },
    button: {
      width: 100,
      height: 100, 
    },
    item: {
      height: 100,
      justifyContent: 'center',
      backgroundColor: 'gray',
      borderWidth: 2,
      borderColor: 'darkgray',
      borderRadius: 10,
      margin: 5
    }
  });
 
  export default styles;