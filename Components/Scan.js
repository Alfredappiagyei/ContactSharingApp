import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Scan({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

    

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
 

  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("memberprofile",{
      name: "Alfred Appiagyei",
      role: "Mobile & Web Developer",
      phone: "+233 555078657",
      mail: "appiagyei@gmail.com",
      location: "Madina Estate",
      
     
    })
    console.log(data)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      
{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      <TouchableOpacity style={{
        padding: 25
      }} onPress={() => navigation.goBack()}>
         <MaterialCommunityIcons name="window-close" size={45} color="white" /> 
      </TouchableOpacity>
    </View>
  );
}