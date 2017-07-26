import React, { Component } from 'react';
import ScheduledGame from '../components/ScheduledGame'

export const EVENT_SORT_BY = {
  TIME_ASC: "TIME_ASC",
  TIME_DESC: "TIME_DESC",
  RECORD_ASC: "RECORD_ASC",
  RECORD_DESC: "RECORD_DESC",
};

const calculateRecordRatio = (record) => {
  return record.wins / (Number(record.wins) + Number(record.losses));
};

// const sortEvents = (a, b, order) => {
//   switch(order) {
//     case EVENT_SORT_BY.TIME_ASC:
//       return new Date(a.date) - new Date(b.date);
//     case EVENT_SORT_BY.TIME_DESC:
//       return new Date(b.date) - new Date(a.date);
//     case EVENT_SORT_BY.RECORD_ASC:
//       return calculateRecordRatio(b.competitions[0].competitors[0].team.record)
//         - calculateRecordRatio(a.competitions[0].competitors[0].team.record)
//     case EVENT_SORT_BY.RECORD_DESC:
//       return calculateRecordRatio(a.competitions[0].competitors[0].team.record)
//         - calculateRecordRatio(b.competitions[0].competitors[0].team.record)
//     default:
//       return 0;
//   }
// };

class SortedScheduledGameContainer extends Component {



  render() {
    const { sortedEvents } = this.props;

    // const sortedEvents = unsortedEvents.sort((a, b) => sortEvents(a, b, order));

    return (<div>
      {sortedEvents.map(event => {
        let game = event.competitions[0];
        return (
          <ScheduledGame
            statusDetail={game.status.detail}
            homeTeam={game.competitors[0]}
            awayTeam={game.competitors[1]}
            links={event.links}
            key={event.id.toString()}
          />)
      })}
    </div>)
  }

}

export default SortedScheduledGameContainer