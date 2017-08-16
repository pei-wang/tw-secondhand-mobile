import { TextInput, View, StyleSheet } from 'react-native'
import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import Header from '../../components/Header/index'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/index'
import { userLogin } from '../../modules/user/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginContent: {},
  inputGroup: {
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonGroup: {
    flex: 0,
    flexDirection: 'column',
    marginTop: 30,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  }
})

type LoginProps<S> = DispatchProp<S> & {}

interface LoginState {
  username?: string
  password?: string
}

class LoginScreen extends React.Component<LoginProps<object>, LoginState> {

  constructor(props: LoginProps<object>) {
    super(props)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  login() {
    console.log(111111)
    this.props.dispatch(userLogin({
      username: this.state.username,
      password: this.state.password,
    }))
  }

  register() {
    this.props.dispatch({
      type: 'REGISTER'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="请登录"/>
        <View style={styles.loginContent}>
          <Logo/>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="用户名"
              style={styles.textInput}
              onChangeText={(username) => this.setState({username})}
            />
            <TextInput
              placeholder="密码"
              style={styles.textInput}
              onChangeText={(password) => this.setState({password})}
            />
          </View>
          <View style={styles.buttonGroup}>
            <View style={{marginTop: 20}}>
              <Button title="登录" onPress={this.login}/>
            </View>
            <View style={{marginTop: 20}}>
              <Button title="免费注册" onPress={this.register}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default connect()(LoginScreen)