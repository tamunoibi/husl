import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigation"
      activeColor="#09BDA2"
      inactiveColor="gray"
      barStyle={{ backgroundColor: "#FFFFFF",borderTopColor: "#09BDA2", borderWidth: 0.5 }}
    >
      {/* <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationNavigation}
        options={{
          tabBarLabel: "Location",
          tabBarIcon: ({ color }) => (
            < MaterialIcons name="add-location" color={color} size={24} />
          ),
        }}
      />
    
      <Tab.Screen
        name="Shop"
        component={ShopNavigation}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <Fontisto name="shopping-store" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-tie" color={color} size={24} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
