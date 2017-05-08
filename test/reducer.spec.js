import reducer from '../src/reducers/user'
import * as types from '../src/constants'

describe('user reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual({})
  })

  it('should handle set user', () => {
    const state = reducer({}, {
      type: types.REGISTER_USER_SUCCESS,
      userData: { email: 'example@ya.ru' }
    })
    expect(state).toEqual({ userData: { email: 'example@ya.ru' } })
  })

  it('should handle error', () => {
    const state = reducer({}, {
      type: types.REGISTER_USER_FAILURE,
      error: { text: 'some error' }
    })
    expect(state).toEqual({ error: { text: 'some error' } })
    
  })
})
