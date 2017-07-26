import eventData from '../adapters/adapter'

export const EVENT_SORT_BY = {
  TIME_ASC: "TIME_ASC",
  TIME_DESC: "TIME_DESC",
  RECORD_ASC: "RECORD_ASC",
  RECORD_DESC: "RECORD_DESC",
};

const calculateRecordRatio = (record) => {
  return record.wins / (Number(record.wins) + Number(record.losses));
};

const sortEvents = (a, b, order) => {
  switch(order) {
    case EVENT_SORT_BY.TIME_ASC:
      return new Date(a.date) - new Date(b.date);
    case EVENT_SORT_BY.TIME_DESC:
      return new Date(b.date) - new Date(a.date);
    case EVENT_SORT_BY.RECORD_ASC:
      return calculateRecordRatio(b.competitions[0].competitors[0].team.record)
        - calculateRecordRatio(a.competitions[0].competitors[0].team.record)
    case EVENT_SORT_BY.RECORD_DESC:
      return calculateRecordRatio(a.competitions[0].competitors[0].team.record)
        - calculateRecordRatio(b.competitions[0].competitors[0].team.record)
    default:
      return 0;
  }
};

export const sortScheduled = (order) => ({ order, type: "SORT" });

const eventFilterReducer = function (state={live:eventData.live ,final: eventData.final, scheduledSorted: []},action){
  switch (action.type) {
    case 'CURRENT':
      return { ...state, live:eventData.live ,final: eventData.final}
    case 'SCHEDULED':
      return { ...state, scheduled:eventData.scheduled}
    case 'SORT':
      return {
        ...state,
        scheduledSorted: eventData.scheduled.slice().sort((a, b) => sortEvents(a, b, action.order))
      }
    default:
      return state
  }
}

export default eventFilterReducer
