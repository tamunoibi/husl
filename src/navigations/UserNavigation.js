import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Verify from "../utils/Verify";
import LandingPage from "../utils/LandingPage";
import SignIn from "../screens/SignIn";
import ErrandSignUp from "../screens/ErrandSignUp";
import PostSignUp from "../screens/PostSignUp";


const Stack = createNativeStackNavigator();
const UserNavigation = () => {
  return (
    <Stack.Navigator
      headerModal="non"
      screenOptions={{ headerStyle: { backgroundColor: "#FFFFFFF" } }}
    >
      <Stack.Screen
        name="Onbording"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpErrand"
        component={ErrandSignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpPostErrand"
        component={PostSignUp}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name="VerifyScreen"
        component={Verify}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="WelcomeScreen"
        component={LandOnboard}
        options={{ headerShown: false }}
      />
     <Stack.Screen
        name="ForgotScreen"
        component={ForgotPassWord}
        options={{ headerShown: false }}
      />
        
     <Stack.Screen
        name="PasswordScreen"
        component={CreatePassword}
        options={{ headerShown: false }}
      /> 
       <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default UserNavigation;
