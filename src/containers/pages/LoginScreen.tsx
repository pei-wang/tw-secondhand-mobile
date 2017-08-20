import { TextInput, View, StyleSheet } from 'react-native'
import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
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

  static navigationOptions = {
    title: '请登录',
  }

  constructor(props: LoginProps<object>) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
    this.validateInput = this.validateInput.bind(this)
  }

  login() {
    if (this.validateInput()) {
      this.props.dispatch(
        userLogin({
          username: this.state.username,
          password: this.state.password,
        })
      )
    }
  }

  validateInput() {
    return this.state.username && this.state.password
  }

  register() {
    this.props.dispatch({
      type: 'REGISTER'
    })
  }

  render() {
    return (
      <View style={styles.container}>
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
              <Button
                disabledStyle={this.validateInput() ? {backgroundColor: '#e9e6e6'} : {}}
                disabled={!this.validateInput()}
                title="登录"
                onPress={this.login}
                textStyle={{color: 'black'}}/>
            </View>
            <View style={{marginTop: 20}}>
              <Button title="免费注册" onPress={this.register} textStyle={{color: 'black'}}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default connect()(LoginScreen)