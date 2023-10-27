import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigations from "./src/navigations/MainNavigation";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainNavigations />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
