import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { connect, DispatchProp } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import * as D from '../../definitions'
import { fetchBoughtProducts } from '../../modules/product/actions'
import Button from '../../components/Button/Button'
import Header from '../../components/Header'
import Logo from '../../components/Logo/index'

export type ProfileProps<S> = DispatchProp<S> & {
  user: D.User
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    width:300,
    height:150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d6d7da',
  },
  logo: {
    marginLeft: 50,
  },
  name: {
    marginRight: 100
  },
  buttons: {height: 300},
})

class ProfileScreen extends React.Component<ProfileProps<object>, object> {
  render() {
    return (
      <View style={styles.container}>
        <Header title="个人信息"/>
        <View style={styles.profile}>
        <Logo style={styles.logo}/>
          <View style={styles.name}>
            <Text>{this.props.user.username}</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            title="已买宝贝"
            onPress={() => this.props.dispatch(fetchBoughtProducts())
            }
          />
          <Button
            title="出售宝贝"
            onPress={() => {
              this.props.dispatch(NavigationActions.navigate({ routeName: 'home' }))
            }}
          />
          <Button
            title="退出登录"
            onPress={() => {
              this.props.dispatch(NavigationActions.back())
            }}
          />
        </View>
      </View>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
  })
)(ProfileScreen)