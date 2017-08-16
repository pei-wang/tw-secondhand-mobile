import { combineEpics } from 'redux-most'

import { epics as userEpic } from '../modules/user/actions'
import { epics as prodEpic } from '../modules/product/actions'

export default combineEpics([
  ...userEpic,
  ...prodEpic,
])