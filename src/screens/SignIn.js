import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";


const SignIn = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleFocus = (input) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
              >
      <AntDesign
              name="leftcircleo"
              size={29}
              color="#000000"
       />
            </TouchableOpacity>
      </View>
      <ScrollView>
        <Image
          source={require("../../assets/husllogo.png")}
          resizeMode="contain"
          style={styles.img}
        />
        <View style={{ position: "absolute", top: 95, alignSelf: "center" }}>
          <Text style={{ color: "#73D158", fontSize: 18 }}>Sign up to post errands</Text>
        </View>
        <View style={{ position: "absolute", top: 125, alignSelf: "center" }}>
          <Text style={{ fontWeight: "400", fontSize: 40 }}>Create your</Text>
          <Text style={{ fontWeight: "400", fontSize: 40, paddingLeft: 24 }}>login info</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Fontisto name="email" size={22} color="#000000" style={styles.icon} />
            <Input
              placeholder="Email address"
              value={email}
              onChange={(text) => setEmail(text)}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              style={focusedInput === 'email' ? styles.focusedInput : null}
            />
          </View>
          <View style={styles.inputRow}>
            <Entypo name="lock" size={22} color="#000000" style={styles.icon} />
            <Input
              placeholder="Password"
              value={password}
              onChange={(text) => setPassword(text)}
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
              style={focusedInput === 'password' ? styles.focusedInput : null}
            />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.centerContent}>
              <Text style={styles.btntxt}>Sign in</Text>
              <AntDesign name="arrowright" size={25} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 20,
    width: 81,
    padding: 12,
    justifyContent: "center",
    alignSelf: "center",
    top: Platform.OS === "ios" ? 55 : 45,
  },
  inputContainer: {
    marginTop: 225,
  },
  inputRow: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 5,
    margin:12,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: "#000000",
  },
  icon: {
    marginRight: 10,
  },
  focusedInput: {
    borderWidth: 0.5,
    borderColor: "#73D158", // Green border color for focused input
  },
  btnContainer: {
    flex: 1,
    marginTop: 120,
    justifyContent: "flex-end",
  },
  btn: {
    width: "95%",
    height: 59,
    alignSelf: "center",
    backgroundColor: "#000000",
    borderRadius: 6,

  },
  btntxt: {
    fontWeight: "600",
    fontSize: 22,
    alignSelf: "center",
    padding: 5,
    color: "#FFFFFF",
  },
  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    left: 25,
    marginTop:Platform.OS === "ios" ?  46 : 36,
  },
});