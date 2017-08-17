import * as React from 'react'
import { StyleSheet, TextInput, View, Image } from 'react-native'
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
    const textfieldStyle = {height: 40, width: 250, marginBottom: 20, borderColor: 'gray', borderBottomWidth: 1};
    const uploadDefault = require('../resources/uploading-archive.svg');
    return (
      <View style={styles.container}>
        <Image source={uploadDefault} style={{width: 100, height: 100, backgroundColor: 'red', marginBottom: 20}} />
        <TextInput value='商品名称' style={textfieldStyle}/>
        <TextInput value='售价￥' style={textfieldStyle}/>
        <TextInput value='添加描述...' multiline={true} numberOfLines = {6}
        style={{height: 100, width: 250, marginBottom: 20, borderColor: 'gray', borderWidth: 1}}/>
        <Button title='出售商品' onPress={() => {}}/>
      </View>
    )
  }
}

export default connect()(OthersScreen)
