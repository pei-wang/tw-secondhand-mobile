import { TextInput, View, StyleSheet, Text } from 'react-native'
import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/index'

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
    marginTop: 70,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
  warningMsg: {
    marginLeft: 40,
    marginTop: 20,
    color: 'red',
  }
})

type LoginProps<S> = DispatchProp<S> & {}

interface LoginState {
  username?: string
  password?: string
  confirmPassword?: string
  errorMsg?: string
}

class RegisterScreen extends React.Component<LoginProps<object>, LoginState> {
  static navigationOptions = {
    title: '注册',
  }

  constructor(props: LoginProps<object>) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      errorMsg: '',
    }
    this.register = this.register.bind(this)
    this.validateInput = this.validateInput.bind(this)
  }

  validateInput() {
    if (this.state.password && this.state.confirmPassword && this.state.username) {
      if (this.state.password === this.state.confirmPassword) {
        return true
      } else {
        this.setState({
          errorMsg: '密码不一致!'
        })
      }
    } else {
      this.setState({
        errorMsg: '选项不能为空!'
      })
    }
    return false
  }

  register() {
    if (this.validateInput()) {
      this.props.dispatch({
        type: 'REGISTER'
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContent}>
          <Logo/>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="用户名"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(username) => this.setState({username})}
            />
            <TextInput
              placeholder="密码"
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={(password) => this.setState({password})}
            />
            <TextInput
              placeholder="确认密码"
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            />
          </View>
          <Text style={styles.warningMsg}>{this.state.errorMsg}</Text>
          <View style={styles.buttonGroup}>
            <View style={{marginTop: 20}}>
              <Button title="注册" onPress={this.register} textStyle={{color: 'black'}}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default connect()(RegisterScreen)