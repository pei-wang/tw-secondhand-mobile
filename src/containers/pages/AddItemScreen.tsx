import * as React from 'react'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import Button  from '../../components/Button/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploader: {
    width: '100%',
    height: 140,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  textfield: {
    fontSize: 13,
    color: 'lightgray',
    height: 40,
    width: 250,
    marginBottom: 20,
    borderColor: '#A4A4A4',
    borderBottomWidth: 1
  },

  textArea: {
    fontSize: 13,
    color: 'lightgray',
    height: 100,
    width: 250,
    marginBottom: 20,
    borderColor: '#A4A4A4',
    borderWidth: 1
  },
})

class OthersScreen extends React.Component<DispatchProp<{}>, {}> {
  render() {
    const uploadDefault = require('../resources/uploading-archive.png');
    return (
      <View style={styles.container}>
        <View style={styles.uploader}>
          <Text style={{color: 'lightgray', fontSize: 20, marginBottom: 30}}>点击上传图片</Text>
          <Image source={uploadDefault} style={{width: 50, height: 50}} />
        </View>
        <TextInput value='商品名称' style={styles.textfield}/>
        <TextInput value='售价￥' style={styles.textfield}/>
        <TextInput value='添加描述...' multiline={true} numberOfLines = {6}
        style={styles.textArea}/>
        <Button title='出售商品' onPress={() => {}} textStyle={{color: 'black'}}/>
      </View>
    )
  }
}

export default connect()(OthersScreen)
