import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import { Button } from 'react-native-elements'
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
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.dispatch(NavigationActions.navigate({ routeName: 'home' }))
          }}
        />
        <Button
          title="go back"
          onPress={() => {
            this.props.dispatch(NavigationActions.back())
          }}
        />
      </View>
    )
  }
}

export default connect()(OthersScreen)