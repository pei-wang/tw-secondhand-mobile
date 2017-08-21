import * as D from '../definitions'
import { fetchJson } from './utils'
import { USER_LOGIN_API, USER_SIGN_UP_API, USER_LOGOUT_API } from './urls'
import { AsyncStorage } from 'react-native'

export const login = (user): Promise<D.UserForLoginResponse> => fetchJson(USER_LOGIN_API, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
})

export const logout = async(): Promise<null> => fetchJson(USER_LOGOUT_API, {
  method: 'GET',
})

export const signUp = (user): Promise<D.User> => fetchJson(USER_SIGN_UP_API, {
  method: 'POST',
  body: JSON.stringify(user)
})
