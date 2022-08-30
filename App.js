import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';

const img = require("./assets/image.png")

export default function App() {
  const [data, setData] = useState({});

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image} >
        <DateTime />
        <WeatherScroll />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
});