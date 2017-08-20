import * as React from 'react'

import { Button } from 'react-native-elements'
import { View } from 'react-native'

export interface ButtonProps {
  title: string
  buttonStyle?: object
  textStyle?: object
  onPress: () => void
  disabled?: boolean
  disabledStyle?: object
}

const GeneralButton = (props: ButtonProps) => {
  const {disabled, disabledStyle} = props
  return (
    <View style={{flex: 0, width: 270}}>
      <Button
        buttonStyle={{backgroundColor: 'gold', borderRadius: 10, ...props.buttonStyle}}
        textStyle={{textAlign: 'center', ...props.textStyle}}
        title={props.title}
        onPress={props.onPress}
        disabled={disabled}
        disabledStyle={disabledStyle}
      />
    </View>
  )
}

export default GeneralButton
