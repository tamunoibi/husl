import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";
import React from "react";
import LandCard from "./LandCard";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const windowDimensions = Dimensions.get('window');
const screenHeight = windowDimensions.height;

// Calculate the position for the LandCard based on a percentage of the screen height
const landCardPosition = (screenHeight - 175) * 0.8;
const LandingPage = () => {
const navigation = useNavigation();

const navigateToScreen = (screenName) => {
  navigation.navigate('SignIn');
};
  return (
    <ImageBackground
      source={require("../../assets/bground.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <Image
        source={require("../../assets/huogo.png")}
        resizeMode="contain"
        style={styles.img}
      />
      <View
        style={{
          width: "auto",
          height: 124,
          position: "absolute",
          top: Platform.OS === "ios" ? 325 : 285, // Conditionally set the top value
          left: 22,
          //marginTop:65
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 56, color: "#FFFFFF" }}>
          Get it done
        </Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Text style={{ fontWeight: "400", fontSize: 56, color: "#FFFFFF" }}>
            on
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 56, color: "#73D158" }}>
            Husl
          </Text>
        </View>
      </View>

      <View style={{ position: "absolute", top: Platform.OS==="android"  ? landCardPosition - 20 : landCardPosition -50, alignSelf: "center" }}>
        <LandCard />
      </View>

      <View>
        <TouchableOpacity style={styles.btn} onPress={navigateToScreen}>
          <View style={styles.centerContent}>
            <Text style={styles.btntxt}>LogIn</Text>
            <AntDesign name="arrowright" size={25} color="#000000" />
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", gap: 10, position: "absolute", top: Platform.OS === "ios" ? screenHeight -75 : screenHeight -35, alignSelf: "center" }}>
          <Text style={{ fontSize: 13, color: "#FFFFFF" }}>Already registered?</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, color: "#FFFFFF" }}>LogIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 81,
    padding: 12,
    position: "absolute",
    top: 71,
    left: 25,
    gap: 6.01,
  },
  backgroundImage: {
    flex: 1,
   // width: "100%",
   // height: "100%",
  },
  btn: {
    width: 342,
    height: 59,
    alignSelf: "center",
    backgroundColor: "#73D158",
    borderRadius: 6,
    position: "absolute",
    top:Platform.OS ===  'ios' ? 690 :663,
  },
  btntxt: {
    fontWeight: "600",
    fontSize: 22,
    alignSelf: "center",
    padding: 5,
  },
  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});



