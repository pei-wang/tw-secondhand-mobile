import { StyleSheet, FlatList, View } from 'react-native'
import * as React from 'react'
import * as D from '../../definitions'
import ProductItem from '../../components/ProductItem/index'



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
})

interface ProductListProps {
    products: D.ProductState
}

const ProductList = (props: ProductListProps) => {
  return (
    <View style={styles.container}>
        <FlatList
          data={props.products}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => <ProductItem
            name={item.name}
            price={item.price}
            img={item.img}
            status={item.status}
            buyer={item.buyer}
          />}
        />
      </View>
  )
}

export default ProductList