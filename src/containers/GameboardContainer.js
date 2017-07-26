import React, { Component } from 'react';
import {connect} from 'react-redux'
import filterEvents from '../actions/filterEvents'
import LiveGame from '../components/LiveGame'
import FinalGame from '../components/FinalGame'
import SortedScheduledGameContainer from "./SortedScheduledGameContainer";
import EventOrderDropdown from "../components/EventOrderDropdown";

class Gameboard extends Component {

  constructor(props){
    super(props)
    this.handleCilck = this.handleCilck.bind(this)
  }

  handleCilck(filter){
    this.props.filterEvents(filter)
  }

  render() {
    const { location } = this.props
    const { scheduledSorted, live,final} = this.props.display
    var events;
    const { order } = this.props.location.query;
    if(scheduledSorted) {
      events = (<SortedScheduledGameContainer
        sortedEvents={scheduledSorted}
        order={order}
      />)
    }
    else{
        events =live.map(event=>{
          let game = event.competitions[0]
          return (
            <LiveGame
              statusDetail={game.status.detail}
              homeTeam={game.competitors[0]}
              awayTeam={game.competitors[1]}
              situation={game.situation}
              links={event.links}
              eventID={event.id.toString()}
              key={event.id.toString()}
            />)}).concat(
            final.map(event=>{
              let game = event.competitions[0]
              return (
                <FinalGame
                  statusDetail={game.status.detail}
                  homeTeam={game.competitors[0]}
                  awayTeam={game.competitors[1]}
                  links={event.links}
                  eventID={event.id.toString()}
                  key={event.id.toString()}
                />)})
            )
      }

    return (
      <div className="mainContainer">
          <span className="selectors">
            <div>
              <button type="button" className="button" onClick={()=>this.handleCilck("CURRENT")}>
              LIVE
              </button>
            </div>
            <div>
              <button type="button" className="button" onClick={()=>this.handleCilck("SCHEDULED")}>
                SCHEDULED
              </button>
            </div>
          </span>
          <span className="events">
              {events}
          </span>
          <span className="logo">
            <img src={require('../assets/images/mlblogo.png')} alt="MLB logo"/>
          </span>
          <EventOrderDropdown location={location} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { display: state.events };
}

export default connect(mapStateToProps,{filterEvents})(Gameboard)
