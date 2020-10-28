import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from '../assets/logo.png'



export default function LandingPage({navigation}) {
  return (
    <View style={styles.container}>  

           <View style={styles.logoContainer}>
           <Image source={Logo} style={styles.logoimage}></Image>
           </View>

           <View style={styles.heading}>
              <Text style={styles.headindTextFirst}>FYLO</Text>
              <Text  style={styles.headindTextSecond}>CONTACTS</Text>
           </View>
           

           <View style={styles.button}>
            <TouchableOpacity
             onPress={()=>{
                       navigation.navigate("entrypage")}} style={styles.getStarted}>
                <Text>GET STARTED</Text>
            </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
      
      backgroundColor:"#f8f8ff", 
      flex:100,
      alignItems: 'center',
      
   },

 logoContainer:{
     marginVertical:50
  },

  logoimage:{
      width:237,
      height:220
  },

  heading:{
       marginVertical:40
  },
  button:{
      marginVertical:150,
      paddingHorizontal:15,
      paddingVertical:15,
      

  },

  getStarted:{
    borderBottomWidth:1,
    borderBottomColor:"red",
    
  },

  headindTextFirst:{
      fontSize:19,
      marginLeft:25
  },
   headindTextSecond:{
      fontSize:19
  }


});
