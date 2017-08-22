import {
  StackNavigator,
} from 'react-navigation'

import BoughtScreen from '../containers/pages/BoughtScreen'
import OwnedScreen from '../containers/pages/OwnedScreen'
import ProfileScreen from '../containers/pages/ProfileScreen'

const Route = StackNavigator({
  bought: {
    screen: BoughtScreen,
    showLabel: false,
    navigationOptions: {
      title: '已买宝贝',
    },
  },
  owned: {
    screen: OwnedScreen,
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
