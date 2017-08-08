import * as React from 'react'
import { Provider, connect } from 'react-redux'
// import { View, Text } from 'react-native'
import {
   addNavigationHelpers,
 } from 'react-navigation'

import Route from './store/router'
import storeConfig from './store/index'
const Store = storeConfig()

const App = (props) => (
  <Provider store={Store}>
    <Route
      navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
      })}
    />
  </Provider>
)

const mapStateToProps = (state) => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(App)
