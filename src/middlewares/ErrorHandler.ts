import { Alert } from 'react-native'

export const errorHandler = store => next => action => {
  if (action.type === 'Error') {
    Alert.alert('Error', `${action.payload}`)
  }
  return next(action)
}

export default errorHandler