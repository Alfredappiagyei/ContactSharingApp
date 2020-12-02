import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
 import Pro from '../assets/pro.jpg';
 import {Feather, AntDesign, EvilIcons, Entypo} from "@expo/vector-icons";



export default function Memberprofile({route, navigation}) {
  return (
 <View style={styles.container}>

 <View style={styles.personProfileContainer}>
<Image source={Pro} style={styles.profileimage}/>

<View style={styles.descriptioContainer}>
 <Text style={styles.name}>{route.params.name} </Text>
 <Text  style={styles.position}>{route.params.role} </Text>
</View>
 </View>


<View style={styles.socialIconsContainer}>
  <TouchableOpacity style={styles.socialIcons}>
  <Entypo
     name="twitter-with-circle"
     size={27}
     color="black" 
     style={styles.icons}
     />
  </TouchableOpacity>
  <TouchableOpacity style={styles.socialIcons}>
  <Entypo
     name="linkedin-with-circle"
     size={27}
     color="black" 
     style={styles.icons}
     />
  </TouchableOpacity>

</View>

<View style={styles.contactsMainContainer}>

 <View style={styles.contactsContainers}>
 <Feather
     name="phone"
     size={20}
     color="black" 
     style={styles.icons}
     />
      <Text style={styles.name}>{route.params.phone} </Text>
 </View>

 
 <View style={styles.contactsContainers}>
 <AntDesign
     name="mail"
     size={20}
     color="black" 
     style={styles.icons}
     />
      <Text style={styles.name}>{route.params.mail} </Text>
 </View>


 
 <View style={styles.contactsContainers}>
 <EvilIcons
     name="location"
     size={20}
     color="black" 
     style={styles.icons}
     />
      <Text style={styles.name}>{route.params.location} </Text>
 </View>
 </View>


 </View>
    
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:30
  },

  personProfileContainer:{
    flexDirection:"row",
    marginTop:50

  },

 profileimage:{
  height:70,
  width:70,
  borderRadius:50,
  
 },

descriptioContainer:{
  alignSelf:"center",
  left:5
},

 name:{
   fontWeight:"bold",
   fontSize:15,
   marginBottom:10,
 },
position:{
  fontSize:18,
  color:"lightgrey"
},

socialIconsContainer:{
  flexDirection:"row",
  marginVertical:20
},
socialIcons:{
   
},






contactsMainContainer:{
  marginTop:30
},

contactsContainers:{
  flexDirection:"row",
  marginVertical:10
},

icons:{
 marginRight:15 
}


});





