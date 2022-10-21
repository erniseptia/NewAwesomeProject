import React, { Component }  from "react";
import { View, Text, Image, TextInput, NavigatorIOS } from "react-native";
import foto from './download.jpg';
import { style } from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from './navigasi/About.js';
import Home from './navigasi/Home.js';
import Satu from './navigasi/Satu.js';
import Dua from './navigasi/Dua.js';
import Tiga from './navigasi/Tiga.js';

function HomeScreen() {
  return (
    <View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Satu" component={Satu}/>
        <Stack.Screen name="Dua" component={Dua}/>
        <Stack.Screen name="Tiga" component={Tiga}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;

