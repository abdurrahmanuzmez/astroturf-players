import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Home} from './src/screens/'

export default function App() {
  const image = { uri: "https://kidsupp.co/img/bg-img/welcome-bg.jpg" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
          <Home/>
          <TouchableOpacity
              onPress={() => alert('Hello, world!')}
              style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
  },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    }

});
