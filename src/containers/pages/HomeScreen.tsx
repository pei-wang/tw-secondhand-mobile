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

class HomeScreen extends React.Component<DispatchProp<{}>, {}> {
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

export default connect()(HomeScreen)