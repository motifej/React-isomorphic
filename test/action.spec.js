import * as actions from '../src/actions'
import * as types from '../src/constants'

describe('actions', () => {
  it('should create an action to singUp user', () => {
    const user = {
      email: 'example@ya.ru',
      password: '123456'
    }
    const expectedAction = {
      type: types.REGISTER_USER_REQUEST,
      payload: user
    }
    expect(actions.signUp(user)).toEqual(expectedAction)
  })

  it('should create an action to singIn user', () => {
    const user = {
      email: 'example@ya.ru',
      password: '123456'
    }
    const expectedAction = {
      type: types.LOGIN_USER_REQUEST,
      payload: user
    }
    expect(actions.signIn(user)).toEqual(expectedAction)
  })

})