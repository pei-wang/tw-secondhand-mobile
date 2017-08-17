import { StyleSheet, Image, View } from 'react-native'
import * as React from 'react'

export interface LogoProps {
  style?: StyleSheet.Style,
}
const logoStyle = StyleSheet.create({
  logo: { 
    flex: 0,
    marginTop: 20, 
    height: 80, 
    flexDirection: 'row', 
    justifyContent: 'center',
  }
})

const Logo = (props: LogoProps) => {
  return (
    <View style={[logoStyle.logo, props.style]}>
      <Image
        style={{width: 80, height: 80}}
        source={require('./logo.png')}
      />
    </View>
  )
}

export default Logo