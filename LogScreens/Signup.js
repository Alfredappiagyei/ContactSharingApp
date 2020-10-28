import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput,Platform,Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {AntDesign} from "@expo/vector-icons";


export default function Signup({navigation}) {
    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

  return (
    <View style={styles.container}>  
            <View style={styles.imageContainer}>

                <View style={{position:"absolute", marginTop:90,alignSelf:"center"}}>
                <AntDesign name="user" size={50} color="#fff" style={styles.search} />

                 <TouchableOpacity  onPress={pickImage}  style={styles.pickImage}>
                <Text style={styles.profiletext} >Add Profile Photo</Text>
                </TouchableOpacity>

                </View>
            
              {image && <Image source={{ uri: image }} style={ styles.image} />}
           </View>


           <View style={styles.headingContainer}>
           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Name</Text>
               <TextInput 
               placeholder="Alfred Appiagyei"
               style={styles.textInputOne }>
               </TextInput>
           </View>

           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Email</Text>
               <TextInput 
               placeholder="appiagyei@gmail.com"
               style={styles.textInputOne }>
               </TextInput>
           </View>

           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Phone Number</Text>
               <TextInput 
               keyboardType='numeric'
               placeholder="+233 550130743"
               style={[styles.textInputOne,styles.phoneInput]} >
               </TextInput>
           </View>

           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Role</Text>
               <TextInput 
               placeholder="Technica Director"
               style={styles.textInputOne }>
               </TextInput>
           </View>

           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Twitter</Text>
               <TextInput 
               placeholder="@alfred"
               style={styles.textInputOne }>
               </TextInput>
           </View>

           
           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>linkedIn</Text>
               <TextInput 
               placeholder="alfred"
               style={styles.textInputOne }>
               </TextInput>
           </View>
 
          
           </View>

          
         <View style={styles.button}>    
            <TouchableOpacity style={styles.signin}>
                <Text style={{color:"#fff"}}>REGISTER</Text>
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
        flex:25,
        backgroundColor:"lightgrey"
        
    },
     image:{
       height:250,
       width:450
     },
     headingContainer:{
         flex:35,
         marginHorizontal:30
         
     },
 
     inputRowOne:{
         flexDirection:"row",
         borderBottomWidth:1,
         borderBottomColor:"lightgrey"
     },
 
     inputRowTwo:{
         flexDirection:"row",
         alignSelf:"center",
         
     },
 

     search:{
        alignSelf:"center",
        color:"red"
    },
     textInputOne:{
         height:50,
         width:285,
         textAlign:"right",
         
     },
 
     
     textInputTwo:{
         height:50,
         width:258
     },

     phoneInput:{
        height:50,
        width:215
     },
  
    button:{
         flex:7,
         
     },
 
    signin:{
         alignSelf:'center',
         backgroundColor:"red",
         paddingVertical:15,
         paddingHorizontal:155,
         borderRadius:5
 
     },
 
     forgotContainer:{
         flexDirection:"row",
         flex:10,
         marginHorizontal:30
     },
 
     forgot:{
         marginHorizontal:10,
     
     },

     profiletext:{
         color:"red",
         fontWeight:"bold",
     }
 
 
 
 });
 
