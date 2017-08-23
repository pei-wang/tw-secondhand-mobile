import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import { StyleSheet, Text, View, Image } from 'react-native'
import { buyAProduct } from '../../modules/product/actions'
import Button from '../../components/Button/Button'
import * as D from '../../definitions'


const buyerIcon = require('../../containers/resources/buyer.png')

export type PageProps<S> = DispatchProp<S>  & {
  products: D.ProductState;
  navigation: any;
}


class ProductScreen extends React.Component<PageProps<object>> {
  render() {
    const { state } = this.props.navigation;
    const { products } = this.props;
    const id = state.params.id;
    console.log("product!"+state.params)
    const product = products && products.find((product)=>product.objectId===id);
    return (
      <View style={style.productItem}>
        <Image
          style={style.productImage}
          source={{uri: product.img}}
        />
        <View style={style.productInfo}>
          <Text>{product.name}</Text>
          <Text>￥{product.price}</Text>
          {
            product.owner ?
              <View style={style.buyer}>
                <Image
                  style={{width: 20, height: 20}}
                  source={buyerIcon}
                />
                <Text>{product.owner.username}</Text>
              </View> : <Text/>
          }
          <Text>{product.description}</Text>
        </View>
        <Button
            title="购买"
            onPress={() => {
              this.props.dispatch(buyAProduct())
            }}
          />
      </View>
    )
  }
}

export default connect(
  state => ({
    products: state.products,
  })
)(ProductScreen)

const style = StyleSheet.create({
  productItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  productImage: {
    width: 160,
    height: 160,
  },
  productInfo: {
    marginTop: 80,
  },
  buyer: {
    
    flexDirection: 'row',
  }
})

