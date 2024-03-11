import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default Welcome = () => {
    return(
    <View style={styles.container}>
        <View style={{borderWidth: 0}}>
        <LottieView
            style={{height: 200}}
            source={require('../assets/dog.json')}
            autoPlay
            loop={true}
            resizeMode="cover"
        />
        </View>       
        <Text style={styles.welcomeText}>Hello!</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:60
    },
    welcomeText:{
        fontSize: 30
    }
})