import { REGISTER_USER_REQUEST } from '../constants'

export const signUp = payload => ({
  type: REGISTER_USER_REQUEST,
  payload
})

export const signIn = payload => ({
  type: 'LOGIN_USER_REQUEST',
  payload
})