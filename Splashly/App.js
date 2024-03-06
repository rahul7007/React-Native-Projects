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
 } from 'react-native';
 import SplashScreen from 'react-native-splash-screen'
 
 const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  }, [])
  
   return (
     <View>
       <Text>Hello World!</Text>
     </View>
   );
 }
 
 export default App;    
 
 