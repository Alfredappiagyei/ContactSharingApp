import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';


import LandingPage from '../Components/Landingpage';
import Entrypage from '../Components/Entrypage';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Home from '../Components/Home';
import Scan from '../Components/Scan';
import Profile from '../Components/Profile';
import Memberprofile from '../Components/MemberProfile';
import {connect} from 'react-redux'
import {AntDesign} from "@expo/vector-icons";
import {logout} from '../Redux/actions/authActions'


import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

 function Navigations({auth, logout,navigation}) {
  return (
    <NavigationContainer> 
       {
            auth.login ?
          
         
                          <Stack.Navigator>
                      
                          <Stack.Screen 
                          options={{
                              headerStyle:{ backgroundColor:"red" }, 
                              title:"FYLO",
                              headerTintColor:"#fff",
                             
                              headerRight:()=>( 
                                <TouchableOpacity
                                style={{right:25}}
                                 onPress={logout}
                                                               
                                >
                                   <AntDesign 
                                      name="logout"
                                      size={22}
                                      color="#fff"            
                                   />
                                </TouchableOpacity>
                           ) }} 
                                name="home"  component={Home} />
                          
                                        
                          <Stack.Screen name="scan" component={Scan}/>
                                        
                          <Stack.Screen name="profile" component={Profile}
                          options={{
                            title:"My Profile",
                            headerStyle:{
                              backgroundColor:"red"
                            },
                            headerTitleStyle:{
                              color:"#fff",
                              fontSize:21
                            }
                          }}
                          />
                          
                          
                          <Stack.Screen name="memberprofile" component={Memberprofile}
                          options={{
                            title:"Member Profile",
                            headerStyle:{
                              backgroundColor:"red"
                            },
                            headerTitleStyle:{
                              color:"#fff",
                              fontSize:21,
                              
                            }
                          }}
                          /> 
                         
                                                 
                          </Stack.Navigator>

         :

                      <Stack.Navigator>
                      <Stack.Screen name="landingpage" component={ LandingPage }
                      options={{ headerShown: false  }} 
                      />
                      
                        <Stack.Screen name="entrypage" component={Entrypage } 
                          options={{
                            headerShown: false
                          }}
                        />

                         
                          
                          <Stack.Screen name="register" component={Register} 
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

                          <Stack.Screen name="signin" component={Login} 
                          options={{
                            headerTitle:"Sign In",
                            headerStyle:{
                              backgroundColor:"red",
                            },
                            headerTitleStyle:{
                              color:"#fff",
                              fontSize:22,
                            }
                          }}
                        /> 


                     
                      </Stack.Navigator>

                  }

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




const mapStateToProps =(state) =>{
  return {auth:state}
}

export default connect(mapStateToProps,{logout})(Navigations)

