import { TextInput, View, StyleSheet } from 'react-native'
import * as React from 'react'
import { connect, DispatchProp } from 'react-redux'
import Header from '../../components/Header/index'
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
  }
})

type LoginProps<S> = DispatchProp<S> & {}

interface LoginState {
  username?: string
  password?: string
}

class RegisterScreen extends React.Component<LoginProps<object>, LoginState> {

  constructor(props: LoginProps<object>) {
    super(props)
    this.register = this.register.bind(this)
  }

  register() {
    this.props.dispatch({
      type: 'REGISTER'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="注册"/>
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
            <TextInput
              placeholder="确认密码"
              style={styles.textInput}
              onChangeText={(password) => this.setState({password})}
            />
          </View>
          <View style={styles.buttonGroup}>
            <View style={{marginTop: 20}}>
              <Button title="注册" onPress={this.register}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default connect()(RegisterScreen)