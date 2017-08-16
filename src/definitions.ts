import * as Redux from 'redux'
// import * as Navigation from 'react-navigation'

// This file holds our app typings

// BUSINESS LOGIC
export interface App {
    loading: boolean
    logined: boolean
}

export interface User {
  username: string
  isLogin?: boolean
  sessionToken?: string
}

export interface UserForLoginResponse {
  username: string
  sessionToken: string
}

export interface UserProfile {
    id: string
    email: string
}

export interface UserForLogin {
    username?: string
    password?: string
}

// ACTION CREATORS

// ACTIONS
export interface GeneralAction extends Redux.Action {
    payload?: object
}
export interface UserLoginAction extends GeneralAction {
    payload?: UserForLogin
}
export interface UserAction extends GeneralAction {
    payload?: User | UserForLogin | UserProfile
}

export interface Product {
    description?: string,
    name: string,
    price?: number,
    owner?: object,
    img?: string,
    objectId?: string,
    createdAt?: string,
    updatedAt?: string,
}

export type ProductState = Product[]

// STATES
export type AppState = App
export type UserState = User

export interface RootState {
    user?: UserState
    app?: AppState
    products?: ProductState
    nav?: {}
}