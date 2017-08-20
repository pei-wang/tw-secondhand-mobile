import {
  StackNavigator,
} from 'react-navigation'

import HomeScreen from '../containers/pages/HomeScreen'
import ProfileScreen from '../containers/pages/ProfileScreen'
// import LoginScreen from '../containers/pages/LoginScreen'

const Route = StackNavigator({
  bought: {
    screen: HomeScreen,
    showLabel: false,
    navigationOptions: {
      title: '已买宝贝',
    },
  },
  owned: {
    screen: HomeScreen,
    showLabel: false,
    navigationOptions: {
      title: '出售宝贝',
    },
  },
  profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: '个人信息',
    },
  },
},                          
{
  initialRouteName: 'profile',
})

export default Route
