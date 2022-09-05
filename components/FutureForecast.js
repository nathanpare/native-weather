import React from 'react'
import { View } from 'react-native'

import FutureItem from './FutureItem'

const FutureForecast = () => {

  //const img = {uri: "http://openweathermap.org/img/wn/01d@4x.png"}

  return (
    <View style={{flexDirection: "row"}}>
      <FutureItem day="Tuesday" valueDay="Day 35" valueNight="Night 20" unit="&#176;C" img={{uri: "http://openweathermap.org/img/wn/01d@4x.png"}}/>
      <FutureItem day="Wednesday" valueDay="Day 33" valueNight="Night 19" unit="&#176;C" img={{uri: "http://openweathermap.org/img/wn/03d@4x.png"}}/>
      <FutureItem day="Thursday" valueDay="Day 37" valueNight="Night 22" unit="&#176;C" img={{uri: "http://openweathermap.org/img/wn/11d@4x.png"}}/>
      <FutureItem day="Friday" valueDay="Day 31" valueNight="Night 23" unit="&#176;C" img={{uri: "http://openweathermap.org/img/wn/01d@4x.png"}}/>
      <FutureItem day="Saturday" valueDay="Day 26" valueNight="Night 18" unit="&#176;C" img={{uri: "http://openweathermap.org/img/wn/02d@4x.png"}}/>
      <FutureItem day="Sunday" valueDay="Day 28" valueNight="Night 19" unit="&#176;C" img={{uri: "http://openweathermap.org/img/wn/11d@4x.png"}}/>

    </View>
  )
}

export default FutureForecast
