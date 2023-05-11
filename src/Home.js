import * as React from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { requestCameraPermission } from './requestPermission';

const HomeScreen = ({navigation}) => {

    const openCamera = async () => {
        //requesting camera permission
        const result = await requestCameraPermission();
        if (result == "granted") {
            navigation.navigate("Camera");
        }
        else {
            Alert.alert('Permission Request', "Please allow camera permission from app settings.", [
                {text: 'Open Settings', onPress: () => Linking.openSettings()}
            ]);
        }
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Click to Open Camera</Text>
            <TouchableOpacity activeOpacity={0.7} style={Styles.touchableCamera} onPress = {() => openCamera()}>
                <View style={Styles.cameraView}>
                    <Icon name = "camera" size = { 30 } color = "white"/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
      fontFamily: "Poppins-Regular",
      fontSize: 30,
      fontWeight: "500",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
    },
    touchableCamera: {
        width: 70, 
        height: 70, 
        borderRadius: 70/2, 
        backgroundColor: '#000000', 
        marginTop: 20
    },
    cameraView: {
        flex: 1, 
        alignSelf: 'center', 
        justifyContent: 'center'
    }
})

export default HomeScreen;