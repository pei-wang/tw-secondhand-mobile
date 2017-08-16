import { Image, View } from 'react-native'
import * as React from 'react'

const Logo = () => {
  return (
    <View style={{flex: 0, marginTop: 20, height: 80, flexDirection: 'row', justifyContent: 'center'}}>
      <Image
        style={{width: 80, height: 80}}
        source={require('./logo.png')}
      />
    </View>
  )
}

export default Logo