import * as React from 'react'
import {StyleSheet, Text, TextInput, View, Image, ImagePickerIOS, TouchableHighlight} from 'react-native'
import {connect, DispatchProp} from 'react-redux'
import Button from '../../components/Button/Button'
import {uploadImageActionCreator, updateProducts} from '../../modules/product/actions'
import {updateTrade, updateSelected} from '../../modules/trade/actions'

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

const defaultImage = require('../resources/uploading-archive.png')

class AddItemScreen extends React.Component<AddItemProps<object>, {}> {

    selectImage() {
        ImagePickerIOS.openSelectDialog({}, (imageURI) => {
            const extIdx = imageURI.indexOf('ext=')
            const ext = imageURI.slice(extIdx + 'ext='.length)
            const idIdx = imageURI.indexOf('id=')
            const fileName = imageURI.slice(idIdx + 3, extIdx - 1)
            const image = {uri: imageURI, name: fileName + '.' + ext, type: 'image/' + ext}
            this.props.dispatch(updateSelected(image))
        }, () => {
        })
    }

    addItem() {
        this.props.dispatch(uploadImageActionCreator(this.props.imageSelected))
    }

    nameChange(name) {
        this.props.dispatch(updateTrade(name, this.props.merchant.price, this.props.merchant.description))
    }

    priceChange(price) {
        const checkedPrice = Number(price) ? price : ''
        this.props.dispatch(updateTrade(this.props.merchant.name, checkedPrice, this.props.merchant.description))
    }

    descChange(description) {
        this.props.dispatch(updateTrade(this.props.merchant.name, this.props.merchant.price, description))
    }

    render() {
        const image = this.props.imageSelected ? this.props.imageSelected : defaultImage
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.uploader} onPress={() => {
                    this.selectImage()
                }}>
                    <View>
                        <Text style={{color: 'lightgray', fontSize: 20, marginBottom: 30}}>点击上传图片</Text>
                        <Image source={image} style={{width: 100, height: 100}}/>
                    </View>
                </TouchableHighlight>
                <TextInput placeholder='商品名称' style={styles.textfield} value={this.props.merchant.name}
                           onChangeText={(e) => {
                               this.nameChange(e)
                           }}/>
                <TextInput placeholder='售价￥' style={styles.textfield} value={this.props.merchant.price}
                           onChangeText={(e) => {
                               this.priceChange(e)
                           }}/>
                <TextInput placeholder='添加描述...' multiline={true} numberOfLines={6} style={styles.textArea}
                           value={this.props.merchant.description} onChangeText={(e) => {
                    this.descChange(e)
                }}/>
                <Button title='出售商品' onPress={() => {
                    this.addItem()
                }} textStyle={{color: 'black'}}/>
            </View>
        )
    }
}

const mapStateToProps = (state: D.RootState) => {
    return state.trade
}

export default connect(mapStateToProps)(AddItemScreen)
