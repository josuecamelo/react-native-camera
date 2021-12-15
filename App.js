import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
export default function App() {
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <RNCamera
        style={styles.preview}
        type={type}
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar Camera',
          message: 'Nós precisamos de usar a sua camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}></RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});