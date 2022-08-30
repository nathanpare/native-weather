import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import WeatherItem from './WeatherItem';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTime = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour %12 : hour
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? ' pm' : ' am'
  
      setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
  
      setDate(days[day] + ', ' + date + ' ' + months[month]) 
  
  }, 1000);
  },[])
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>
            {time}
          </Text>
        </View>
        <View>
          <Text style={styles.subHeading}>
            {date}
          </Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Humidity" value="50" unit="%" />
          <WeatherItem title="Pressure" value="1000" unit="hPA" />
          <WeatherItem title="Sunrise" value="06:00" unit="am" />
          <WeatherItem title="Sunset" value="08:30" unit="pm" />
        </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timeZone}>
          Vancouver
        </Text>
        <Text style={styles.latLong}>
          4.567N 1.976E
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  heading: {
    fontSize: 45,
    color: "white",
    fontWeight: "100",
    marginTop: 50
  },
  subHeading: {
    fontSize: 25,
    color: "#eee",
    fontWeight: "300"
  },
  rightAlign: {
    textAlign: "right",
    marginTop: 75
  },
  timeZone: {
    fontSize: 20,
    color: "white"
  },
  latLong: {
    fontSize: 16,
    color: "white",
    fontWeight: "700"
  },
  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  }
})

export default DateTime
