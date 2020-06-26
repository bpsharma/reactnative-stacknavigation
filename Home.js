//Home.js
import * as React from 'react';
import {View,Text,Button} from 'react-native';
export default function Home({ navigation }) {
    return (
    <View>
    <Text style={{color:'red',fontSize:24}}>Welcome to Home Page</Text>
      <Button
        title="Login"
        onPress={() =>
          navigation.navigate('Login')
        }
      />
    </View>
    );
  }
