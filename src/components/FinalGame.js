import React, { Component } from 'react';
import FinalGameLink from './FinalGameLink'
import classNames from 'classnames'

class FinalGame extends Component {

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
    const home = classNames({'looser': !this.props.homeTeam.isWinner})
    const away = classNames({'looser': !this.props.awayTeam.isWinner})
    const summary = (<FinalGameLink links={this.props.links.web} />)
    const details =
    (<div>
        <div className="statusDetail">
           <p>{this.props.statusDetail}</p>
       </div>
       <div className="gameStats">
         <div className="teams">
           <p className={home}>{this.props.homeTeam.team.abbreviation}</p>
           <p className={away}>{this.props.awayTeam.team.abbreviation}</p>
         </div>
         <div className="scores">
           <p className={home}>{this.props.homeTeam.score}</p>
           <p className={away}>{this.props.awayTeam.score}</p>
         </div>
       </div>
     </div>)

    return (
      <div className="FinalGame" onMouseEnter={()=>this.onMouseEnter()} onMouseLeave={()=>this.handleLeave()}>
         {this.state.hover ? summary : details}
      </div>
    )
  }
}

export default FinalGame
