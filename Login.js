//Login.js
import * as React from 'react';
import {View,Text,TextInput, Button} from 'react-native';

export default function Login({ navigation }) {
    return (
      <View> 
        <Text>Login</Text>
        <TextInput placeholder="User ID"/>
        <TextInput placeholder="Password" secureTextEntry/> 
        <Button
            title="Login"
            onPress={() =>alert("Write the login logic here")}
        />    
        <Button
            title="Signup"
            onPress={() =>
                navigation.navigate('Signup')
            }
        />
      </View>
    );
  }
  