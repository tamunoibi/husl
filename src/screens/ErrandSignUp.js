import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";

const ErrandSignUp = () => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [fullName, setFullName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleFocus = (input) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <>
   <TouchableOpacity
  style={styles.backButton}
  onPress={() => navigation.goBack()}
>
  <AntDesign
    name="leftcircleo"
    size={29}
    color="#000000"
   // style={{ position: 'absolute', top: 65, left: 25 }}
  />
</TouchableOpacity>

    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    
      <ScrollView>
        <Image
          source={require("../../assets/husllogo.png")}
          resizeMode="contain"
          style={styles.img}
        />
        <View style={{ position: "absolute", top: 95, alignSelf: "center" }}>
          <Text style={{ color: "#73D158", fontSize: 18 }}>Sign up to run errands</Text>
        </View>
        <View style={{ position: "absolute", top: 125, alignSelf: "center" }}>
          <Text style={{ fontWeight: "400", fontSize: 40 }}>Create your</Text>
          <Text style={{ fontWeight: "400", fontSize: 40, paddingLeft: 24 }}>login info</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <AntDesign name="user" size={22} color="#000000" style={styles.icon} />
            <Input
              placeholder="Full Name"
              value={fullName}
              onChange={(text) => setFullName(text)}
              onFocus={() => handleFocus('fullName')}
              onBlur={handleBlur}
              style={focusedInput === 'fullName' ? styles.focusedInput : null}
            />
          </View>
          <View style={styles.inputRow}>
            <AntDesign name="phone" size={22} color="#000000" style={styles.icon} />
            <Input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(text) => setPhoneNumber(text)}
              onFocus={() => handleFocus('phoneNumber')}
              onBlur={handleBlur}
              style={focusedInput === 'phoneNumber' ? styles.focusedInput : null}
            />
          </View>
          <View style={styles.inputRow}>
            <Fontisto name="email" size={22} color="#000000" style={styles.icon} />
            <Input
              placeholder="Email"
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
              <Text style={styles.btntxt}>SignUp</Text>
              <AntDesign name="arrowright" size={25} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
};

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
    width: 342,
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

export default ErrandSignUp;






// import { StyleSheet, Text, View, Image, Platform } from 'react-native';
// import React, { useState } from 'react';
// import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
// import Input from "../components/Input";

// const ErrandSignUp = () => {
//   const [focusedInput, setFocusedInput] = useState(null);
//   const [fullName, setFullName] = useState();
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const handleFocus = (input) => {
//     setFocusedInput(input);
//   };

//   const handleBlur = () => {
//     setFocusedInput(null);
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../../assets/husllogo.png")}
//         resizeMode="contain"
//         style={styles.img}
//       />
//       <View style={{ position: "absolute", top: 95, alignSelf: "center" }}>
//         <Text style={{ color: "#73D158" }}>Sign up to run errands</Text>
//       </View>
//       <View>
//         <Text>Create your</Text>
//         <Text>login info</Text>
//       </View>
//       <View style={styles.inputContainer}>
//         <View style={[styles.inputRow, focusedInput === 'fullName' ? styles.focusedInput : null]}>
//           <AntDesign name="user" size={22} color="#000000" style={styles.icon} />
//           <Input
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(text) => setFullName(text)}
//             onFocus={() => handleFocus('fullName')}
//             onBlur={handleBlur}
//           />
//         </View>
//         <View style={[styles.inputRow, focusedInput === 'phoneNumber' ? styles.focusedInput : null]}>
//           <AntDesign name="phone" size={22} color="#000000" style={styles.icon} />
//           <Input
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(text) => setPhoneNumber(text)}
//             onFocus={() => handleFocus('phoneNumber')}
//             onBlur={handleBlur}
//           />
//         </View>
//         <View style={[styles.inputRow, focusedInput === 'email' ? styles.focusedInput : null]}>
//           <Fontisto name="email" size={22} color="#000000" style={styles.icon} />
//           <Input
//             placeholder="Email"
//             value={email}
//             onChange={(text) => setEmail(text)}
//             onFocus={() => handleFocus('email')}
//             onBlur={handleBlur}
//           />
//         </View>
//         <View style={[styles.inputRow, focusedInput === 'password' ? styles.focusedInput : null]}>
//           <Entypo name="lock" size={22} color="#000000" style={styles.icon} />
//           <Input
//             placeholder="Password"
//             value={password}
//             onChange={(text) => setPassword(text)}
//             onFocus={() => handleFocus('password')}
//             onBlur={handleBlur}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   img: {
//     height: 20,
//     width: 81,
//     padding: 12,
//     justifyContent: "center",
//     alignSelf: "center",
//     top: Platform.OS === "ios" ? 55 : 45,
//   },
//   inputContainer: {
//     marginTop: 95,
//   },
//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//     backgroundColor: "#F8F8F8",
//     paddingHorizontal: 5,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   focusedInput: {
//     borderWidth: 0.5,
//     borderColor: "#73D158", // Green border color for focused input
//   },
// });

// export default ErrandSignUp;



















// import { StyleSheet, Text, View, Image, Platform } from 'react-native';
// import React, { useState } from 'react';
// import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
// import Input from "../components/Input";

// const ErrandSignUp = () => {
//   const [fullName, setFullName] = useState();
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   return (
//     <View>
//       <Image
//         source={require("../../assets/husllogo.png")}
//         resizeMode="contain"
//         style={styles.img}
//       />
//       <View style={{ position: "absolute", top: 95, alignSelf: "center" }}>
//         <Text style={{ color: "#73D158" }}>Sign up to run errands</Text>
//       </View>
//       <View>
//         <Text>Create your</Text>
//         <Text>login info</Text>
//       </View>
//       <View style={{ marginTop: 95 }}>
//         <View style={[styles.inptvw, styles.spaceBottom]}>
//           <AntDesign name="user" size={22} color="#000000" />
//           <Input
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(text) => setFullName(text)}
//           />
//         </View>
//         <View style={[styles.inptvw, styles.spaceBottom]}>
//           <AntDesign name="phone" size={22} color="#000000" />
//           <Input
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(text) => setPhoneNumber(text)}
//           />
//         </View>
//         <View style={[styles.inptvw, styles.spaceBottom]}>
//           <Fontisto name="email" size={22} color="#000000" />
//           <Input
//             placeholder="Email"
//             value={email}
//             onChange={(text) => setEmail(text)}
//           />
//         </View>
//         <View style={styles.inptvw}>
//           <Entypo name="lock" size={22} color="#000000" />
//           <Input
//             placeholder="Password"
//             value={password}
//             onChange={(text) => setPassword(text)}
//             secureTextEntry={true}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ErrandSignUp;

// const styles = StyleSheet.create({
//   img: {
//     height: 20,
//     width: 81,
//     padding: 12,
//     justifyContent: "center",
//     alignSelf: "center",
//     position: "absolute",
//     top: Platform.OS === "ios" ? 55 : 45
//   },
//   inptvw: {
//     width:"95%",
//     height:"auto",
//     flexDirection: "row",
//     alignSelf: "center",
//     //padding: 12,
//     backgroundColor: "#F8F8F8",
//     borderRadius:6
//   },
//   spaceBottom: {
//     marginBottom: 10, // Add space between each input field
//   },
// });






















// import { StyleSheet, Text, View,Image,Platform } from 'react-native'
// import React,{useState} from 'react'
// import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
// import Input from "../components/Input";

// const ErrandSignUp = () => {
//     const [fullName,setFullName] = useState();
//     const [phoneNumber,setPhoneNumber] = useState();
//     const [email,setEmail] = useState();
//     const [password,setPassword] = useState();
//   return (
//     <View>
//         <Image
//         source={require("../../assets/husllogo.png")}
//         resizeMode="contain"
//         style={styles.img}
//       />
//       <View style={{position:"absolute", top:95, alignSelf:"center"}}>
//       <Text style={{color:"#73D158"}}>Sign up to run errands</Text>
//       </View>
//       <View>
//       <Text >Create your</Text>
//       <Text>login info</Text>
//       </View>
//       <View style={{marginTop:95}}>
//          <View style={styles.inptvw}>
//             <AntDesign name="user" size={22} color="#000000" style={{position:"absolute", top:32}} />
//             <Input 
//                placeholder="fullName" 
//                value={fullName} 
//                onChange={(text) => setFullName(text)}

//             />
//          </View>
//          <View style={styles.inptvw}>
//             <AntDesign name="phone" size={22} color="#000000" style={{position:"absolute", top:32}} />
//             <Input 
//                placeholder="Phone Number" 
//                value={phoneNumber} 
//                onChange={(text) => setPhoneNumber(text)}
               
//             />
//          </View>
//          <View style={styles.inptvw}>
//             <Fontisto name="email" size={22} color="#000000" style={{position:"absolute", top:32}} />
//             <Input 
//                placeholder="Email" 
//                value={email} 
//                onChange={(text) => setEmail(text)}
               
//             />
//          </View>
//          <View style={styles.inptvw} >
//             <Entypo name="lock" size={22} color="#000000" style={{position:"absolute", top:32}} />
//             <Input 
//                placeholder="Email" 
//                value={password} 
//                onChange={(text) => setPassword(text)}
//                secureTextEntry={true}               
//             />
//          </View>
//       </View>
//     </View>
//   )
// }

// export default ErrandSignUp

// const styles = StyleSheet.create({
//     img: {
//         height: 20,
//         width: 81,
//         padding: 12,
//         justifyContent: "center",
//         alignSelf: "center",
//         position: "absolute",
//         top: Platform.OS === "ios" ? 55 :45
//       },
//       txt:{
//         fontSize: 21,
//         color:"#000000",
//       },
//       inptvw:{
//         flexDirection: "row",
//         padding:12,
//         width: 81,
//         backgroundColor: "#F8F8F8",
        
//       }
// })