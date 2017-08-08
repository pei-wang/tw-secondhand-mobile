import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'

class HomeScreen extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home !</Text>
        <Button
          title="Go to Others"
          onPress={() => {
            this.props.dispatch(NavigationActions.navigate({ routeName: 'others' }))
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default connect()(HomeScreen)