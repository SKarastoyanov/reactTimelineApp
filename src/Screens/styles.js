import { StyleSheet } from "react-native"

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    header: {
      textAlign: "center",
      color: "gray",
      fontSize: 22,
      padding: 10,
    },
    button: {
      width: 100,
      height: 50, 
      backgroundColor: '#3e86de',
      justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 5,
      margin: 5,
      },
    item: {
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#807d77',
      borderWidth: 2,
      borderColor: '#33322f',
      borderRadius: 10,
      margin: 5
    }
  });
 
  export default styles;