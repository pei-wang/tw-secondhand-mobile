import {
  NavigationActions,
  TabNavigator,
} from 'react-navigation'

import HomeScreen from '../containers/pages/HomeScreen'
import OthersScreen from '../containers/pages/OthersScreen'

const Route = TabNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  others: {
    screen: OthersScreen,
  },
}, {
  initialRouteName: 'home'
})

const initialRouterAction = NavigationActions.init({
  params: {
    routeName: 'home',
  }
})

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