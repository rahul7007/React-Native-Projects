/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React, { useEffect } from 'react';
 import {
   Text,
   View,
   BackHandler,
   Alert
 } from 'react-native';
 import SplashScreen from 'react-native-splash-screen'
import Welcome from './src/screens/Welcome';
 
 const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you want to exit ?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [])
  
   return (
     <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
       <Welcome />
     </View>
   );
 }
 
 export default App;    
 
 