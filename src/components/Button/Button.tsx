import * as React from 'react'

import { Button } from 'react-native-elements'
import { View } from 'react-native'

export interface ButtonProps {
  title: string
  onPress: () => void
}

const GeneralButton = (props: ButtonProps) => {
  return (
    <View style={{width: 300}}>
      <Button
        buttonStyle={{backgroundColor: 'gold', borderRadius: 10}}
        textStyle={{textAlign: 'center'}}
        title={props.title}
        onPress={props.onPress}
      />
    </View>
  )
}

export default GeneralButton
