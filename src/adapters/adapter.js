import apiData from '../api/data'


function processEvents(data){

  let events = {final:[],live:[],scheduled:[]}
  let mlb =data.sports[0].leagues[0]

  mlb.events.forEach((event)=>{
    switch (event.competitions[0].status.description) {
      case "FINAL":
        events.final.push(event)
        break;
      case "IN PROGRESS":
        events.live.push(event)
        break;
      default:
        events.scheduled.push(event)
    }
  })

  return events
}

const processedEvents = processEvents(apiData)
export default processedEvents
