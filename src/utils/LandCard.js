import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
  } from "react-native";
  import React,{useState} from 'react';
  import { FontAwesome,AntDesign } from "@expo/vector-icons";


  const { width } = Dimensions.get("window");

const LandCard = () => {
    const [data, setData] = useState([
        {
          id: "123",
          title: "SignUp to run errands",
        },
        {
          id: "456",
          title: "SignUp to post errands",
        },
        // ... Add more items if needed
      ]);
  return (
    <View style={{flexDirection:"row"}}>
      
        {data.map((item, index) => (
          <View key={index} style={styles.cardContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{item.title}</Text>
              <TouchableOpacity onPress={() => toggleVisibility(index)}>
                
              </TouchableOpacity>
            </View>
            
            <View style={{position:"absolute", top:65, right:35}}>
              <AntDesign name="rightcircleo" size={45} color="#FFFFFF"  style={{position:"absolute", top:5, right: -15}}/>  
              </View>
          </View>
        ))}
    </View>
  )
}

export default LandCard

const styles = StyleSheet.create({
    
    scrollContainer: {
      flexDirection: "row",
      paddingHorizontal: 15,
    },
    cardContainer: {
      backgroundColor: "#2D2D2D",
      width: 176,
      marginHorizontal: 10,
      padding: 12,
      height: 155,
      borderRadius: 6,
      borderRadiusColor:"#73D158",
      
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    headerText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
    },
    contentContainer: {
      justifyContent: "space-between",
    },
    pritxt: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
    },
  });