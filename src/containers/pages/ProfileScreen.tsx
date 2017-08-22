import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { connect, DispatchProp } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import * as D from '../../definitions'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/index'
import { userLogout } from '../../modules/user/actions'
import { CheckLoginWrapper } from '../layout/CheckLogin'

export type ProfileProps<S> = DispatchProp<S> & {
  user: D.User
}

class ProfileScreen extends React.Component<ProfileProps<object>, object> {
  onBoughtProductPressed() {
    if (this.props.user.isLogin) {
      this.props.dispatch(NavigationActions.navigate({routeName: 'bought'}))
    } else {
      this.props.dispatch(NavigationActions.navigate({routeName: 'Login'}))
    }
  }

  onOwnedProductPressed() {
    if (this.props.user.isLogin) {
      this.props.dispatch(NavigationActions.navigate({routeName: 'owned'}))
    } else {
      this.props.dispatch(NavigationActions.navigate({routeName: 'Login'}))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Logo style={styles.logo}/>
          <View style={styles.name}>
            <Text>{this.props.user.username}</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            title="已买宝贝"
            onPress={() => this.onBoughtProductPressed()}
          />
          <Button
            title="出售宝贝"
            onPress={() => this.onOwnedProductPressed()}
          />
          <Button
            title={this.props.user.isLogin ? '退出登录' : '登录'}
            onPress={() => {
              if (this.props.user.isLogin) {
                this.props.dispatch(userLogout())
                this.props.dispatch(NavigationActions.back())
              } else {
                this.props.dispatch(NavigationActions.navigate({routeName: 'Login'}))
              }
            }}
          />
        </View>
      </View>
    )
  }
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
    width: 300,
    height: 150,
    marginTop: 50,
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
  buttons: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 100,
  },
})

export default CheckLoginWrapper(connect(
  state => ({
    user: state.user,
  })
)(ProfileScreen))