import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ModalView = (props) => {

  const {
    title,
    style,
    containerStyle,
    filters = [], 
    onSelect
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={ props.visible }
      onRequestClose={() => {
        props.setVisible( !props.visible );
      }}
    >
      <View style={ styles.mainContainer }>
        <ScrollView contentContainerStyle={style} style={containerStyle}>
          <Text style={ styles.heading }> {title} </Text>
          {
            filters.map((i, index) => {
              let text = i === "Unchanged" ? 'Save with the same size' : 'Save with the compressed size'
                return (
                  <TouchableOpacity 
                    onPress={() => onSelect(i) } 
                    style={ styles.deviceList }
                    key={ index }
                  >
                    <Text style={styles.deviceItem} > 
                      {text}
                    </Text>
                  </TouchableOpacity>
                )
            })
          }
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  //  height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000c7',
  },
  deviceList:{
    alignItems: 'center', 
    padding: 10,
    color: "#000000",
  },
  heading:{
    color: "#000000",
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20
  },
  deviceItem:{
    color: "#000000",
  },
  selectedItem:{
    color: "#000000",
    fontSize: 12
  },
})

export default ModalView;
