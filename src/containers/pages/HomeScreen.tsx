import * as React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import ProductItem from '../../components/ProductItem/index'
import { fetchProducts } from '../../modules/product/actions'
import * as D from '../../definitions'

export type PageProps<S> = DispatchProp<S> & {
  products: D.ProductState;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

class HomeScreen extends React.Component<PageProps<object>> {

  componentDidMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.products}
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
}

const mapStateToProps = (state: D.RootState) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(HomeScreen)