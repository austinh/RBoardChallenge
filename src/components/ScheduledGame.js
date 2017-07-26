import React, { Component } from 'react';
import moment from 'moment'
import ConversationLink from './ConversationLink'

class ScheduledGame extends Component {

  constructor(props){
    super(props)
    this.state ={hover:false}
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleLeave(){
    this.setState({hover: false})
  }

  onMouseEnter(){
    this.setState({hover: true})
  }

  render() {
    const gameDate = moment(this.props.statusDetail).format('ddd - LT')
    const conversation = (<ConversationLink link={this.props.links.web.conversation} />)
    const details= (
      <div>
        <div className="statusDetail">
             <p>{gameDate}</p>
         </div>
         <div className="gameStats">
           <div className="teams">
             <p>{this.props.homeTeam.team.abbreviation}</p>
             <p>{this.props.awayTeam.team.abbreviation}</p>
           </div>
           <div className="scores">
             <p>{this.props.homeTeam.team.record.summary}</p>
             <p>{this.props.awayTeam.team.record.summary}</p>
           </div>
         </div>
      </div>)

    return (
      <span className="ScheduledGame" onMouseEnter={()=>this.onMouseEnter()} onMouseLeave={()=>this.handleLeave()}>
          {this.state.hover ? conversation : details}
      </span>
    )
  }
}

export default ScheduledGame
