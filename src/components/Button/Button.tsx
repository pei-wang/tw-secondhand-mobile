import * as React from 'react'

import { Button } from 'react-native-elements'
import { View } from 'react-native'

export interface ButtonProps {
  title: string
  buttonStyle?: object
  textStyle?: object
  onPress: () => void
}

const GeneralButton = (props: ButtonProps) => {
  return (
    <View style={{width: 300}}>
      <Button
        buttonStyle={{backgroundColor: 'gold', borderRadius: 10, ...props.buttonStyle}}
        textStyle={{textAlign: 'center', ...props.textStyle}}
        title={props.title}
        onPress={props.onPress}
      />
    </View>
  )
}

export default GeneralButton
