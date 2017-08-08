import * as React from 'react'
import { connect } from 'react-redux'
import {
   addNavigationHelpers,
 } from 'react-navigation'

import Route from '../store/Router'

const Root = (props) => (
  <Route
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
)

const mapStateToProps = (state) => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(Root)
