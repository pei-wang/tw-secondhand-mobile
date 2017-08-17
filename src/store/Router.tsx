import * as React from 'react'
import {
  NavigationActions,
  TabNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../containers/pages/HomeScreen'
import AddItemScreen from '../containers/pages/AddItemScreen'
// import ProfileScreen from '../containers/pages/ProfileScreen'
import LoginScreen from '../containers/pages/LoginScreen'

const Route = TabNavigator({
  home: {
    screen: HomeScreen,
    showLabel: false,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  addProduct: {
    screen: AddItemScreen,
    navigationOptions: {
      tabBarLabel: 'add',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={'ios-add-circle-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  profile: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
},                         {
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
