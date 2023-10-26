import { View, Text, Image, Pressable, TextInput, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
// import Button from '../components/Button';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.signup}> Signup to run errands</Text>
                    <Text style={styles.createInfo}>Create your login info</Text>
                </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'COLORS.white',
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 22
  },
  signup: {
    fontSize: 22,
    marginVertical: 12,
    color: COLORS.primary
  },
  createInfo: {
    fontSize: 45,
    color: COLORS.black
}
});

export default Signup