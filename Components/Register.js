import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput,Platform, } from 'react-native';
import React, { useState, useEffect, Component } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {AntDesign} from "@expo/vector-icons";
import {connect} from 'react-redux';
import { createEmailAccount} from '../Redux/actions/authActions'

class Register extends Component {
  
  constructor (props) {
     super(props)
     this.state ={
       name:"",
       email:"",
       phone:"",
       password:"",
       role:"",
       twitter:"",
       linkedin:"",
       image:""
     }
  }

  handleUpdateState=(name,value) =>{
    this.setState({
      [name]:value
    })
}

handleOnSubmit=()=>{
  this.props.createEmailAccount(this.state.email, this.state.password)
} 

componentDidMount=()=>{
  (async () => {
    if (Platform.OS !== 'web') {
     const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
     }
    }
  })();
}


  render() {
       

       const pickImage = async () => {
         let result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.All,
           allowsEditing: true,
           aspect: [4, 3],
           quality: 1,
           base64: true
         });
  
         console.log(result);
  
       if (!result.cancelled) {
          this.setState({
            image:result.base64
          });
         }
       };

       let {navigation} = this.props
  return (
    <View style={styles.container}>  
            <View style={styles.imageContainer}>

                <View style={{position:"absolute", marginTop:90,alignSelf:"center"}}>
                <AntDesign name="user" size={50} color="#fff" style={styles.search} />
  
                  <TouchableOpacity  onPress={pickImage}  style={styles.pickImage}>
                <Text style={styles.profiletext} >Add Profile Photo</Text>
                </TouchableOpacity>   

                </View>
          
               {this.state.image !=='' &&  <Image source={{uri: 'data:image/jpeg;base64,' + this.state.image}} style={styles.image} />}
                  
           </View>

                
           <View style={styles.headingContainer}>
           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Name</Text>
               <TextInput 
               placeholder="Alfred Appiagyei"
               value={this.state.name}
               onChangeText={(text) =>{
                this.handleUpdateState('name',text)
              }}
               style={styles.textInputOne }>
               </TextInput>
           </View>

           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Email</Text>
               <TextInput 
               placeholder="appiagyei@gmail.com"
               value={this.state.email}
               onChangeText={(text) =>{
                this.handleUpdateState('email',text)
              }}
               style={styles.textInputOne }>
               </TextInput>
           </View>

           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:2}}>Password</Text>
               <TextInput 
                 secureTextEntry={true}
               placeholder="password"
               value={this.state.password}
               onChangeText={(text) =>{
                this.handleUpdateState('password',text)
              }}
               style={styles.textInputOne }>
               </TextInput>
           </View>

           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Phone Number</Text>
               <TextInput 
               keyboardType='numeric'
               placeholder="+233 550130743"
               value={this.state.phone}
               onChangeText={(text) =>{
                this.handleUpdateState('phone',text)
              }}
               style={[styles.textInputOne,styles.phoneInput]} >
               </TextInput>
           </View>


           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Role</Text>
               <TextInput 
               placeholder="Technica Director"
               value={this.state.role}
               onChangeText={(text) =>{
                this.handleUpdateState('role',text)
              }}
               style={styles.textInputOne }>
               </TextInput>
           </View>

           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Twitter</Text>
               <TextInput 
               placeholder="@alfred"
               value={this.state.twitter}
               onChangeText={(text) =>{
                this.handleUpdateState('twitter',text)
              }}
               style={styles.textInputOne }>
               </TextInput>
           </View>

           
           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>linkedIn</Text>
               <TextInput 
               placeholder="alfred"
               value={this.state.linkedin}
               onChangeText={(text) =>{
                this.handleUpdateState('linkedin',text)
              }}
               style={styles.textInputOne }>
               </TextInput>
           </View>
 
          
           </View>

          
         <View style={styles.button}>    
            <TouchableOpacity style={styles.signin}
                        onPress={this.handleOnSubmit}
                      
                 >
                <Text style={{color:"#fff"}}>REGISTER</Text>
            </TouchableOpacity>
            </View>


        

        
    </View>
  );
}
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

 
 const mapStateToProps =(state) =>{
  return {auth:state}
}
 
export default connect(mapStateToProps,{createEmailAccount})(Register)