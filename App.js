import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LandingPage from './WelcomeScreens/Landingpage';
import Entrypage from './WelcomeScreens/Entrypage';
import Login from './LogScreens/Login';
import Signup from './LogScreens/Signup';
import Home from './Home';
import Scan from './LogScreens/Scan';
import {AntDesign} from "@expo/vector-icons";



import { NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator()
export default function App({navigation}) {
  return (
    <NavigationContainer> 
    <Stack.Navigator>
 <Stack.Screen name="landingpage" component={ LandingPage }
 options={{
   headerShown: false
 }} />
 
   <Stack.Screen name="entrypage" component={Entrypage } 
    options={{
      headerShown: false
    }}
   />
     
   <Stack.Screen name="login" component={Login} 
    options={{
      headerTitle:"Sign In",
      headerStyle:{
        backgroundColor:"red",
      },
      headerTitleStyle:{
        color:"#fff",
        fontSize:22
      }
    }}
   />
        
   <Stack.Screen name="signup" component={Signup} 
   options={{
     headerTitle:"Register",
     headerStyle:{
       backgroundColor:"red",
     },
     headerTitleStyle:{
       color:"#fff",
       fontSize:22
     }
   }}
   />
   

       
<Stack.Screen
options={{
  headerStyle:{ 
    backgroundColor:"red",
  }, 
  title:"FYLO",
  headerTintColor:"#fff",
  
  headerRight:()=>(
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate("home")}}
    >
    <AntDesign
    name="user"
    size={25}
    color="#fff" 
    style={styles.search}
    />
    </TouchableOpacity>
  ),

}} 
name="home"  component={Home} />

              
<Stack.Screen name="scan" component={Scan}/>

</Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
   
  },

  search:{
    right:20,
},
});



