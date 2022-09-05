import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const FutureItem = ({ day, valueDay, valueNight, unit, img }) => {

  return (
    <View style={styles.futureItemContainer}>
      <Text style={styles.day}>
        {day}
      </Text>
      <Image source={img} style={styles.image}/>
      <Text style={styles.temp}>{valueDay}{unit}</Text>
      <Text style={styles.temp}>{valueNight}{unit}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  futureItemContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000033",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 20,
    marginLeft: 10
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "200"
  }
})

export default FutureItem
