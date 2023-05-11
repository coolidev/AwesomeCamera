import React, {useState} from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

const VideoScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
  
    const onLoadStart = () => {
        setIsLoading(true);
    }

    const onLoad = () => {
        setIsLoading(false);
    }

    const onEnd = () => {
        props.navigation.goBack()
    }

    return (
        <View style={Styles.container}>
            {isLoading &&
                <View style={Styles.activityIndicator}>
                    <ActivityIndicator style={{flex: 1}} size={75} color="#ffffff" />
                </View>
            }
            <Video
                onLoad={onLoad}
                onLoadStart={onLoadStart}
                onEnd={onEnd}
                controls={true}
                style={{flex: 1}}
                resizeMode={'cover'}
                onFullScreen={true}
                source={{ uri: props.route.params.uri }}
                // source={{
                // uri:
                //     'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                // }}
                volume={10}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    activityIndicator:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
})

export default VideoScreen;