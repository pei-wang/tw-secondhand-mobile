import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export interface ProductItemProps {
  title: string;
}

const Header = (props: ProductItemProps) => {
  return (
    <View style={style.productItem}>
      <Text style={style.title}>{props.title}</Text>
    </View>
  )
}

export default Header

const style = StyleSheet.create({
  productItem: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
  }
})
