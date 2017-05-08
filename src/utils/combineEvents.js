export default function combineEvents(reducers, initialState) {
  return (state = initialState, event) => {
    if (Object.prototype.hasOwnProperty.call(reducers,event.type)) {
      return reducers[event.type](state, event)
    }
    return state
  }
}