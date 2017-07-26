import eventData from '../adapters/adapter'

const fullDetailsReducer = function (state={event: eventData.live[0]},action){

  switch (action.type) {
    case 'GET LIVE GAME':
      let liveEvent = eventData.live.filter(event=> event.id === action.payload )
      return {event: liveEvent[0]}
    case 'GET FINAL GAME':
      let finalEvent = eventData.final.filter(event=> event.id === action.payload )
      return {event: finalEvent[0]}
    default:
      return state
  }
}

export default fullDetailsReducer
