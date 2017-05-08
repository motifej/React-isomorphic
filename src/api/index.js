import request from './base'

export const signUp = (body) =>
  request(
    'signup',
    {
      method: 'POST',
      body
    }
  )

export const signIn = (body) =>
  request(
    'signin',
    {
      method: 'POST',
      body
    }
  )