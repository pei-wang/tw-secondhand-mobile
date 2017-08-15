import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import { Button } from '../../components/Button/Button'
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class OthersScreen extends React.Component<DispatchProp<{}>, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Others Screen!</Text>
        <input placeholder='商品名称'/>
        <input placeholder='售价￥'/>
        <Button>
      </View>
    )
  }
}

export default connect()(OthersScreen)
