import React from 'react'
import { View } from 'react-native'

import FutureItem from './FutureItem'

const FutureForecast = () => {
  return (
    <View style={{flexDirection: "row"}}>
      <FutureItem />
      <FutureItem />
      <FutureItem />
    </View>
  )
}

export default FutureForecast
