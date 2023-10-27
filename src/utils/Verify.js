import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, Fontisto } from "@expo/vector-icons";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useNavigation } from "@react-navigation/native";

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 6; // Updated to six boxes
const CELL_SIZE = 50; // Adjusted size for six boxes
const CELL_BORDER_RADIUS = 5;
const DEFAULT_CELL_BG_COLOR = "#fff";
const NOT_EMPTY_CELL_BG_COLOR = "#3557b7";
const ACTIVE_CELL_BG_COLOR = "#f7fafe";

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const Verify = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign
            name="leftcircleo"
            size={29}
            color="#000000"
            //style={{ position: 'absolute', top: 65, left: 25}}
          />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View style={{ marginTop: 65 }}>
            <Text style={styles.title}>Verify your {"\n"}Phone number</Text>
          </View>
          {/* <Image style={styles.icon} source={source} /> */}
          <Text style={styles.subTitle}>
            Please enter the 6 digit OTP sent to your{"\n"} number ending with
            7890
          </Text>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Resend OTP</Text>
            <AntDesign name="arrowright" size={25} color="#44932E"  style={styles.nextButtonIcon}/>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Verify;

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 130,
    paddingHorizontal: 6,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 6,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 8,
    // ...Platform.select({ web: { lineHeight: 65 } }),
    fontSize: 30,
    textAlign: "center",
    borderRadius: 6,
    color: "#3759b8",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  root: {
    minHeight: 800,
    padding: 20,
  },
  title: {
    //paddingTop: 50,
    color: "#000",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "center",
    //paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: "auto",
    marginRight: "auto",
  },
  subTitle: {
    paddingTop: 30,
    color: "#000",
    textAlign: "center",
  },
  nextButton: {
    marginTop: 180,
    borderRadius: 5,
    height: 49,
    backgroundColor: "#F4FFF0",
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
    marginBottom: 100,
    flexDirection: "row",
    gap: 4,
  },
  nextButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#44932E",
    fontWeight: "300",
    padding:9
  },
  nextButtonIcon: {
    padding:9
  },
  backButton: {
    left: 25,
    marginTop: Platform.OS === "ios" ? 46 : 36,
  },
});
