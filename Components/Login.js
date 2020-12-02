import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,  } from 'react-native';
import entry from '../assets/login.jpg'
import {connect} from 'react-redux';
import {loginEmailAccount,} from '../Redux/actions/authActions'

class Login extends Component {
 
  constructor(props){
    super(props)
    this.state ={
      email:"",
      password:"",
    }
  }

  handleUpdateState=(name,value) =>{
      this.setState({
        [name]:value
      })
  }

  handleOnSubmit=()=>{
    this.props.loginEmailAccount (this.state.email, this.state.password)
  }

    render() {
  
  return ( 
    <View style={styles.container}>  

           <View style={styles.imageContainer}>
           <Image source={entry}  style={styles.image}></Image>
           </View>
 

           <View style={styles.headingContainer}>
           <View style={styles.inputRowOne}>
               <Text style={{fontSize:17, marginTop:15, marginRight:30}}>Email</Text>
               <TextInput 
               placeholder="appiagyei@gmail.com" 
               value={this.state.email}  
               onChangeText={(text) =>{
                this.handleUpdateState('email',text)
              }}    
               style={styles.textInputOne }
               >
               </TextInput>
           </View>
 
           <View style={styles.inputRowTwo}>
               <Text style={{fontSize:17, marginTop:10, marginRight:30}}>Password</Text>
               <TextInput 
                secureTextEntry={true}
               placeholder="*****"
               value={this.state.password}
               onChangeText={(text) =>{
                this.handleUpdateState('password',text)
              }}
                style={styles.textInputTwo}>
               </TextInput>
           </View>

           </View>

          
         <View style={styles.button}>    
            <TouchableOpacity 
                  onPress={this.handleOnSubmit}
             style={styles.signin}>
                <Text style={{color:"#fff"}}>SIGN IN</Text>
            </TouchableOpacity>
            </View> 


            <View style={styles.forgotContainer}>
                <Text>
                    Forgot?
                </Text>

                <TouchableOpacity style={styles.forgot}>
                <Text >Reset Password</Text>
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
       flex:25
   },
    image:{
      height:250,
      width:450
    },
    headingContainer:{
        flex:9,
        
    },

    inputRowOne:{
        flexDirection:"row",
        alignSelf:"center",
        borderBottomWidth:1,
        borderBottomColor:"lightgrey"
    },

    inputRowTwo:{
        flexDirection:"row",
        alignSelf:"center",
        
    },

    textInputOne:{
        height:50,
        width:290,
        textAlign:"right"
    },

    
    textInputTwo:{
        height:50,
        width:258,
        textAlign:"right"
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
        borderBottomWidth:1,
        borderBottomColor:"red",
        position:"relative",
        alignSelf:"center",
        bottom:57
    
    },
});


 
const mapStateToProps =(state) =>{
    return {auth:state}
  }
   export default connect(mapStateToProps,{loginEmailAccount})(Login);
  
