import React, { Component } from 'react';
import Base from './Base'
import LiveGameLink from './LiveGameLink'


class LiveGame extends Component {

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
      const summary = (<LiveGameLink link={this.props.links.web.playByPlay} gameID={this.props.eventID} />)
      const details =(
        <div>
          <div className="statusDetail">
               <p>{this.props.statusDetail}</p>
           </div>
           <div className="gameStats">
             <div className="teams">
               <p>{this.props.homeTeam.team.abbreviation}</p>
               <p>{this.props.awayTeam.team.abbreviation}</p>
             </div>
             <div className="scores">
               <p>{this.props.homeTeam.score}</p>
               <p>{this.props.awayTeam.score}</p>
             </div>
             <div className="stats">
               <Base
               outs={this.props.situation.outs}
               first={this.props.situation.onFirst}
               second={this.props.situation.onSecond}
               third={this.props.situation.onThird}
               />
             </div>
           </div>
         </div>
      )
    return (
      <div className="LiveGame"  onMouseEnter={()=>this.onMouseEnter()} onMouseLeave={()=>this.handleLeave()}>
           {this.state.hover ? summary : details}
      </div>
    )
  }
}

export default LiveGame
