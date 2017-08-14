import * as React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import ProductItem from '../../components/ProductItem/index'
import Header from '../../components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

class HomeScreen extends React.Component<DispatchProp<{}>, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Header title="精选"/>
        <FlatList
          data={[
            {
              name: 'iphone 6s', price: '3000', img: 'http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg',
              status: '1', buyer: {username: 'pei'}
            },
            {
              name: 'iphone 6s', price: '3000', img: 'http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg',
              status: '1', buyer: {username: 'pei'}
            },
            {
              name: 'iphone 6s', price: '3000', img: 'http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg',
              status: '1', buyer: {username: 'pei'}
            },
            {
              name: 'iphone 6s', price: '3000', img: 'http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg',
              status: '1', buyer: {username: 'pei'}
            },
            {
              name: 'iphone 6s', price: '3000', img: 'http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg',
              status: '1', buyer: {username: 'pei'}
            },
          ]}
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

export default connect()(HomeScreen)