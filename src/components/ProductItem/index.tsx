import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import * as D from '../../definitions'
const buyerIcon = require('../../containers/resources/buyer.png')

export type ProductProps = D.Product & {
  onPress: ()=>void
}

const ProductItem = (props: ProductProps) => {
  return (
    <TouchableHighlight onPress={props.onPress} underlayColor="gold">
    <View style={style.productItem}>
      <Image
        style={style.productImage}
        source={{uri: props.img}}
      />
      <View style={style.productInfo}>
        <Text>{props.name}</Text>
        <Text>￥{props.price}</Text>
        {
          props.owner ?
            <View style={style.buyer}>
              <Image
                style={{width: 20, height: 20}}
                source={buyerIcon}
              />
              <Text>{props.owner.username}</Text>
            </View> : <Text/>
        }
      
      </View>
    </View>
    </TouchableHighlight>
  )
}

export default ProductItem

const style = StyleSheet.create({
  productItem: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 150,
  },
  productImage: {
    width: 80,
    height: 80,
    marginLeft: 50
  },
  productInfo: {
    marginLeft: 80,
  },
  buyer: {
    flex: 1,
    flexDirection: 'row',
  }
})
