import * as React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const buyerIcon = require('../../containers/resources/buyer.png')

export interface ProductItemProps {
  name?: string
  img?: string
  status?: number
  price?: number
  buyer?: {
    objectId?: string
    username?: string
  }
  id?: number
}

const ProductItem = (props: ProductItemProps) => {
  return (
    <View style={style.productItem}>
      <Image
        style={style.productImage}
        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      />
      <View style={style.productInfo}>
        <Text>{props.name}</Text>
        <Text>￥{props.price}</Text>
        {
          props.buyer ?
            <View style={style.buyer}>
              <Image
                style={{width: 20, height: 20}}
                source={buyerIcon}
              />
              <Text>{props.buyer.username}</Text>
            </View> : <Text/>
        }
      </View>
    </View>
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
