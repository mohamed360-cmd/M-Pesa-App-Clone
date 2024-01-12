import { Vibration, View ,StyleSheet } from "react-native";
import AuthScreen from "./Screens/AuthScreen";
import { useState } from "react";
import MainScreen from "./Screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
export default function App(){
  const [isLogedIn,setIsLogedIn] = useState(false)
  return(
    <NavigationContainer>
      { !isLogedIn && <AuthScreen setIsLogedIn={setIsLogedIn}/>}
      {isLogedIn && <MainScreen/>}
    </NavigationContainer>
  )
}