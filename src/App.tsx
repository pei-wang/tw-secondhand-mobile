import * as React from 'react'
import { Provider } from 'react-redux'

import Root from './containers/Root'
import storeConfig from './store/index'
const Store = storeConfig()

const App = (props) => (
  <Provider store={Store}>
    <Root />
  </Provider>
)

export default App
