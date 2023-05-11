import * as React from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const showImage = (props) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Click to Play Recorded Video</Text>
      <View style={{marginTop: 20}}>
        <ImageBackground 
          resizeMode={'contain'} 
          style={Styles.imageBackground} 
          source={{ uri: props.route.params.thumbnail }} 
          poster={props.route.params.thumbnail}
        >
          <TouchableOpacity style={{ alignSelf: 'center', padding: 5 }} onPress={() => props.navigation.navigate('videoScreen', {uri: props.route.params.uri})}>
            <Icon name = "play" size = { 25 } color = "white"/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
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
    // color: "#fffdfd",
  },
  imageBackground: {
    backgroundColor: '#000000', 
    width: 200, 
    height: 200, 
    alignContent : "center", 
    justifyContent: 'center'
  }
})

export default showImage;