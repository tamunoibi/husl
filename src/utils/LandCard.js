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
  import { useNavigation } from "@react-navigation/native";


  const { width } = Dimensions.get("window");

const LandCard = () => {
  const navigation = useNavigation();

    
  const [data, setData] = useState([
    {
      id: '123',
      title: 'SignUp to run errands',
      screenName: 'SignUpErrand', // Screen name to navigate to
    },
    {
      id: '456',
      title: 'SignUp to post errands',
      screenName: 'SignUpPostErrand', // Screen name to navigate to
    },
  ]);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{flexDirection:"row"}}>
      
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cardContainer}
          onPress={() => navigateToScreen(item.screenName)}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{item.title}</Text>
          </View>
          <View style={{ position: 'absolute', top: 75, left: 45 }}>
            <AntDesign
              name="rightcircleo"
              size={45}
              color="#73D158"
              style={{ position: 'absolute', top: 5, right: -15 }}
            />
          </View>
        </TouchableOpacity>
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