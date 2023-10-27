import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  // const inputStyle = {
  //   ...styles.aptinput,
  //   borderRadius: isFocused ? 8 : 0,
  // };

  return (
    <TextInput
      style={styles.aptinput}
      placeholder={props.placeholder}
      placeholderTextColor="#000000"
      name={props.name}
      id={props.id}
      value={props.value}
      autoCorrect={props.autoCorrect}
      onChangeText={props.onChangeText}
      //onFocus={handleFocus}
      //onBlur={handleBlur}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  aptinput: {
    width: 310,
    height: 52,
    backgroundColor: '#F8F8F8',
    //margin: 8,
    padding: 12,
    alignSelf: 'center',
    
    //borderColor: '#FFFFFF',
  },
});
