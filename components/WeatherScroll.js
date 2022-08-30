import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';

import CurrentTemp from './CurrentTemp';
import FutureForecast from './FutureForecast';

const WeatherScroll = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTemp />
      <FutureForecast />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.4,
    backgroundColor: "#18181bcc",
    padding: 30,
  }
})

export default WeatherScroll
