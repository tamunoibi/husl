import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LandCard from "./LandCard";
import { AntDesign } from "@expo/vector-icons";

const LandingPage = () => {
  return (
    // <View >
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
          top: 344,
          left: 22,
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

      <View style={{ position: "absolute", bottom: 185 }}>
        <LandCard />
      </View>

      <View>
        <TouchableOpacity style={styles.btn}>
          <View style={styles.centerContent}>
            <Text style={styles.btntxt}>LogIn</Text>
            <AntDesign name="arrowright" size={25} color="#000000" />
          </View>
        </TouchableOpacity>

        <View style={{flexDirection:"row",gap:10,position:"absolute",top:772,alignSelf:"center"}}>
          <Text style={{fontSize:13,color:"#FFFFFF"}}>Already registered?</Text>
          <TouchableOpacity>
                 <Text style={{fontSize:14,color:"#FFFFFF"}} >LogIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 81,
    padding: 12,
    position: "absolute",
    top: 81,
    left: 25,
    gap: 6.01,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    //alignItems: "center",
  },
  btn: {
    width: 342,
    height: 59,
    alignSelf: "center",
    backgroundColor: "#73D158",
    borderRadius: 6,
    position: "absolute",
    top: 705,
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

// import { StyleSheet, Text, View, ImageBackground, Image,TouchableOpacity } from "react-native";
// import React from "react";
// import LandCard from "./LandCard";
// import { AntDesign } from '@expo/vector-icons';

// const LandingPage = () => {
//   return (
//     // <View >
//       <ImageBackground
//         source={require("../../assets/bground.png")}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <Image
//           source={require("../../assets/huogo.png")}
//           resizeMode="contain"
//           style={styles.img}
//         />
//         <View
//           style={{
//             width: "auto",
//             height: 124,
//             position: "absolute",
//             top: 344,
//             left: 22,
//           }}
//         >
//           <Text style={{ fontWeight: "400", fontSize: 56, color: "#FFFFFF" }}>
//             Get it done
//           </Text>
//           <View style={{ flexDirection: "row", gap: 15 }}>
//             <Text style={{ fontWeight: "400", fontSize: 56, color: "#FFFFFF" }}>
//               on
//             </Text>
//             <Text style={{ fontWeight: "400", fontSize: 56, color: "#73D158" }}>
//               Husl
//             </Text>
//           </View>
//         </View>

//         <View style={{position:"absolute",bottom:185}}>
//           <LandCard />
//         </View>

//         <View>
//         <TouchableOpacity style={styles.btn}>
//   <View style={styles.centerContent}>
//     <Text style={styles.btntxt}>LogIn</Text>
//     <AntDesign name="arrowright" size={25} color="#000000" />
//   </View>
// </TouchableOpacity>

//         </View>
//       </ImageBackground>
//     // </View>
//   );
// };

// export default LandingPage;

// const styles = StyleSheet.create({

//   img: {
//     height: 20,
//     width: 81,
//     padding: 12,
//     position: "absolute",
//     top: 81,
//     left: 25,
//     gap: 6.01,
//   },
//   backgroundImage: {
//     width: "100%",
//     height: "100%",
//     //alignItems: "center",
//   },
//   btn:{
//     width:342,
//     height:59,
//     alignSelf:"center",
//      backgroundColor:"#73D158",
//      borderRadius:6,
//      position:"absolute",
//      top:705,
//   },
//   btntxt:{
//     fontWeight:"600",
//     fontSize:22,
//     alignSelf:"center",
//     padding:5
//   },
//   centerContent: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },

// });

// import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
// import React from "react";
// import LandCard from "./LandCard";

// const LandingPage = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require("../../assets/bground.png")}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <Image
//           source={require("../../assets/huogo.png")}
//           resizeMode="contain"
//           style={styles.img}
//         />
//         <View
//           style={{
//             width: "auto",
//             height: 124,
//             position: "absolute",
//             top: 344,
//             left: 22,
//           }}
//         >
//           <Text style={{ fontWeight: "400", fontSize: 56, color: "#FFFFFF" }}>
//             Get it done
//           </Text>
//           <View style={{ flexDirection: "row", gap:15 }}>
//             <Text style={{ fontWeight: "400", fontSize: 56, color: "#FFFFFF" }}>
//               on
//             </Text>
//             <Text style={{ fontWeight: "400", fontSize: 56, color: "#73D158" }}>
//               Husl
//             </Text>
//           </View>
//         </View>

//         <View style={{ backgroundColor: "#FFFFFF" }}>
//           <LandCard />
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// export default LandingPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000000",
//   },
//   img: {
//     height: 20,
//     width: 81,
//     padding: 12,
//     position: "absolute",
//     top: 81,
//     left: 25,
//     gap: 6.01,
//   },
// });
