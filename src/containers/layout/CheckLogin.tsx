import { connect } from 'react-redux'
import * as React from 'react'
import * as Redux from 'redux'
import { NavigationActions } from 'react-navigation'

interface CheckLoginProps {
  isLogin: boolean
  children?: any
  dispatch: Redux.Dispatch<object>
}

class CheckLogin extends React.Component<CheckLoginProps> {

  componentWillReceiveProps(nextProps) {
    const {isLogin, nav: originalNav} = this.props
    const {nav} = nextProps
    if (!isLogin && nav.routes[0].index !== originalNav.routes[0].index) {
      this.props.dispatch(NavigationActions.navigate({
        routeName: 'Login'
      }))
    }
  }

  constructor() {
    super()
  }

  render() {
    return this.props.children
  }
}

const ConnectedCheckLogin = connect(state => ({
  isLogin: state.user.isLogin,
  nav: state.nav
}))(CheckLogin)

export const CheckLoginWrapper = (InnerComp) => props =>
  (
    <ConnectedCheckLogin {...props}>
      <InnerComp {...props}/>
    </ConnectedCheckLogin>
  )
