import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'; 
import QRCode from 'react-native-qrcode-svg';


export default function Home({navigation}) {
  return (
     <View>

       <View style={styles.headline}>
           <Text style={{fontSize:19,marginBottom:15}}>Exchange Contact Information</Text>
           <Text style={{color:"grey",}}>Scan this QR below to share your contacts</Text>
       </View>

      <View style={styles.qrContainer}>
      <QRCode

      value='hello'
      color={'black'}
      backgroundColor={'white'}
      size={200}
      logo={{url:
        'https://www.google.com/search?q=qrcode+images+download&rlz=1C1CHBF_enGH875GH875&sxsrf=ALeKk02Db8eIpQnr-igVYebuCJ8J_Pv48w:1603394823605&tbm=isch&source=iu&ictx=1&fir=uIK0RlmQ5g2yWM%252CNi7MK0Yu725SRM%252C_&vet=1&usg=AI4_-kSl7YswXemFyewF-tIiOCLZwvWbyA&sa=X&ved=2ahUKEwjz45SX98jsAhXHi1wKHV42ChkQ9QF6BAgKECU#imgrc=uIK0RlmQ5g2yWM'
    }}
    logoMargin={2}
    logoBorderRadius={10}
    logoBackgroundColor={'transparent'}
       />
      </View>

   <View></View>




      <View style={styles.scanContainer}>
          <Text style={styles.addConnection}>Want to add a new connection?</Text>
          <TouchableOpacity 
           onPress={()=>{
            navigation.navigate("picker")}}
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



