import * as validate from '../src/containers/SignUp/validate'

describe('validate from SignUp', () => {
  it('should return only number from String value with length 4', () => {
    expect(validate.numberX(4)('2h3f2f4df2df34')).toEqual('2324')
  })

  it('should return null if String = null', () => {
    expect(validate.numberX(4)(null)).toEqual(null)
  })

})