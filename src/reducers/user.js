import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../constants'
import combineEvents  from '../utils/combineEvents'

export default combineEvents({
  [REGISTER_USER_SUCCESS]: (_, { userData }) => ({ userData }),
  [REGISTER_USER_FAILURE]: (_, { error }) => ({ error }),
}, {})

