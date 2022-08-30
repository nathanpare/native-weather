import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemValue}>
        {title}
      </Text>
      <Text style={styles.weatherItemValue}>
        {value}{unit}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  weatherItemValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "200"
  }
})

export default WeatherItem
