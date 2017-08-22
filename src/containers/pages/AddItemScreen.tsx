import * as React from 'react'
import { StyleSheet, Text, TextInput, View, Image, ImagePickerIOS, TouchableHighlight } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import Button  from '../../components/Button/Button'
import { uploadImageActionCreator } from '../../modules/product/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploader: {
    width: '100%',
    height: 200,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  textfield: {
    fontSize: 13,
    color: 'gray',
    height: 40,
    width: 250,
    marginBottom: 20,
    borderColor: '#A4A4A4',
    borderBottomWidth: 1
  },

  textArea: {
    fontSize: 13,
    color: 'gray',
    height: 100,
    width: 250,
    marginBottom: 20,
    borderColor: '#A4A4A4',
    borderWidth: 1
  },
})

type AddItemProps<S> = DispatchProp<S> & {};

class AddItemScreen extends React.Component<AddItemProps<object>, {}> {

  constructor(props) {
    super(props);
    this.state = {
      image: require('../resources/uploading-archive.png')
    };
  }

  selectImage() {
    ImagePickerIOS.openSelectDialog({}, (imageURI)=> {
      const extIdx = imageURI.indexOf('ext=');
      const ext = imageURI.slice(extIdx+'ext='.length);
      const idIdx = imageURI.indexOf('id=');
      const fileName = imageURI.slice(idIdx+3, extIdx-1);
      this.setState({image: {uri: imageURI, name: fileName+'.'+ext, type: 'image/'+ext}});
    }, ()=>{});
  }

  uploadImage() {
    this.props.dispatch(uploadImageActionCreator(this.state.image));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.uploader} onPress={()=>{this.selectImage()}}>
          <View>
            <Text style={{color: 'lightgray', fontSize: 20, marginBottom: 30}}>点击上传图片</Text>
            <Image source={this.state.image} style={{width: 100, height: 100}} />
          </View>
        </TouchableHighlight>
        <TextInput placeholder='商品名称' style={styles.textfield}/>
        <TextInput placeholder='售价￥' style={styles.textfield}/>
        <TextInput placeholder='添加描述...' multiline={true} numberOfLines = {6}
        style={styles.textArea}/>
        <Button title='出售商品' onPress={()=>{this.uploadImage()}} textStyle={{color: 'black'}}/>
      </View>
    )
  }
}

export default connect()(AddItemScreen)
