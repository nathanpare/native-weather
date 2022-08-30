import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const CurrentTemp = () => {

  const img = {uri: "http://openweathermap.org/img/wn/02d@4x.png"}

  return (
    <View style={styles.currentTempContainer}>
      <Image source={img} style={styles.image}/>
      <View style={styles.subContainer}>
        <Text style={styles.day}>Monday</Text>
        <Text style={styles.temp}>Night 28&#176;C</Text>
        <Text style={styles.temp}>Day 35&#176;C</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    resizeMode: "cover"
  },
  currentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1
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
  },
  subContainer: {
    paddingRight: 40
  }
})

export default CurrentTemp
