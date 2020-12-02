 import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'; 
import { QRCode } from 'react-native-custom-qr-codes-expo';





export default function Home({navigation}) {
  return (
     <View>

       <View style={styles.headline}>
           <Text style={{fontSize:19,marginBottom:15}}>Exchange Contact Information</Text>
           <Text style={{color:"grey",}}>Scan this QR below to share your contacts</Text>
       </View>

      <View style={styles.qrContainer}>
      <QRCode content='https://reactnative.com'
      content="Alfred"
      codeStyle="square"
      size={200}
      color="black"
      />
      </View>

   <View></View>




      <View style={styles.scanContainer}>
          <Text style={styles.addConnection}>Want to add a new connection?</Text>
          <TouchableOpacity 
           onPress={()=>{
            navigation.navigate("scan")}}
            style={styles.scanQR}>
                <Text style={{color:"red"}}>Scan QR</Text>
            </TouchableOpacity>
      </View>
      
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },

  headline:{
   marginVertical:70,
   marginHorizontal:30,
   alignSelf:"center"
   
  },

  qrContainer:{
     alignSelf:"center",
     marginBottom:30
  },

  scanContainer:{
   flexDirection:"row",
   marginTop:180,
   borderTopWidth:1,
   borderTopColor:"grey",
   paddingTop:15,
  },

  addConnection:{
      marginHorizontal:30,
    marginTop:5,
    fontSize:15
    
  },

  scanQR:{
      paddingHorizontal:20,
      paddingVertical:5,
      borderWidth:1,
      borderColor:"red",
      

  },

});



