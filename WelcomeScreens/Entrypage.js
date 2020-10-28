import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import entry from '../assets/entry.jpg'


export default function EntryPage({navigation}) {
  return (
    <View style={styles.container}>  

           <View style={styles.imageContainer}>
           <Image source={entry}  style={styles.image}></Image>
           </View>


           <View style={styles.headingContainer}>
           <Text style={styles.textOne}>
                KEEP IN TOUCH WITH THE PEOPLE OF FYLO
           </Text>

           <Text style={styles.textTwo}>
               Sign in or register with your Fylo email
           </Text>

           </View>

          
            <View style={styles.button}>
            <TouchableOpacity
             onPress={()=>{
              navigation.navigate("signup")}}
             style={styles.signup}>
                <Text style={{fontSize:18}}>SIGN UP</Text>
            </TouchableOpacity>
            

            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate("login")}}
            style={styles.signin}>
                <Text  style={{fontSize:18,}}>SIGN IN</Text>
            </TouchableOpacity>
            </View> 
    </View>
  );
}

const styles = StyleSheet.create({
   container: {   
      flex:100,       
   },
  imageContainer:{
      flex:38
  },
   image:{
     height:350,
     width:450
   },
   headingContainer:{
       flex:22
   },

   textOne:{
     fontSize:20,
     alignSelf:"center",
     marginBottom:15  
   },

   textTwo:{
    alignSelf:"center",
    
},

   button:{
       flexDirection:"row",
       flex:7
   },
   signup:{
     alignSelf:"flex-start",
     marginLeft:30,
     borderBottomWidth:1,
     borderBottomColor:"red",
     
    
   },


   signin:{
     alignSelf:"flex-end",
     marginLeft:230,
     borderBottomWidth:1,
     borderBottomColor:"red",
     bottom:52
     
   }



});
