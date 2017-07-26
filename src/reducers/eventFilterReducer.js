import eventData from '../adapters/adapter'

const eventFilterReducer = function (state={live:eventData.live ,final: eventData.final},action){
  switch (action.type) {
    case 'CURRENT':
      return {live:eventData.live ,final: eventData.final}
    case 'SCHEDULED':
      return {scheduled:eventData.scheduled}
    default:
      return state
  }
}

export default eventFilterReducer
