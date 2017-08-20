import * as React from 'react'
import {
  NavigationActions, StackNavigator,
  TabNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../containers/pages/HomeScreen'
import AddItemScreen from '../containers/pages/AddItemScreen'
import LoginScreen from '../containers/pages/LoginScreen'
import RegisterScreen from '../containers/pages/RegisterScreen'
import ProfileNav from './ProfileNav'

const MainScreenNavigator = TabNavigator({
  home: {
    screen: HomeScreen,
    showLabel: false,
    navigationOptions: {
      tabBarLabel: 'Home',
      title: '精选',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'ios-home-outline'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
  addProduct: {
    screen: AddItemScreen,
    navigationOptions: {
      tabBarLabel: 'add',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'ios-add-circle-outline'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
  profile: {
    screen: ProfileNav,
    navigationOptions: {
      tabBarLabel: 'Profile',
      header: null,
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'ios-person-outline'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
}, {
  initialRouteName: 'home',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: false,
    activeBackgroundColor: 'white',
    activeTintColor: 'black',
    inactiveBackgroundColor: '#fae05e',
  },
})

const Route = StackNavigator({
  Home: {screen: MainScreenNavigator},
  Login: {screen: LoginScreen},
  Register: {screen: RegisterScreen}
})

const initialRouterAction = NavigationActions.init()

const initialState = Route.router.getStateForAction(initialRouterAction, null)

export const reducer = (state = initialState, action) => {
  let nextState
  // Simply return the original `state` if `nextState` is null or undefined.
  switch (action.type) {

    default:
      nextState = Route.router.getStateForAction(action, state)
  }
  return nextState || state
}

export default Route
