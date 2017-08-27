import * as React from 'react'
import {StyleSheet, View, Image} from 'react-native'

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    overlayBackground: {
        top: 0,
        left: 0,
        width: '100%',
        height: '130%',
        backgroundColor: 'white',
        opacity: 0.9,
    },

    operatingImage: {
        width: 100,
        height: 100,
        top: '-70%',
    }
})

const operatingImage = require('../resources/operating.gif')

class OperatingOverlay extends React.Component {

    render() {
        return (
            <View style={styles.overlay}>
                <View style={styles.overlayBackground}/>
                <Image source={operatingImage} style={styles.operatingImage}/>
            </View>
        )
    }
}

export default OperatingOverlay
