import * as React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import Button  from '../../components/Button/Button'
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
        <TextInput value='商品名称' style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}/>
        <TextInput value='售价￥' style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}/>
        <TextInput value='添加描述...' multiline={true} numberOfLines = {6} style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}/>
        <Button title='出售商品' onPress={() => {}}/>
      </View>
    )
  }
}

export default connect()(OthersScreen)
