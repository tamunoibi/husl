import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './src/screens/signup';

export default function App() {
  return (
    <Signup />
  );
}
/**
 * Sign up to run errands
Create your
login info
George Ademo|
Phone number
Email address
Password
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
