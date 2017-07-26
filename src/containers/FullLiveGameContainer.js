import React, { Component } from 'react';
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import getLiveGame from '../actions/getLiveGame'
import FullLiveGame from '../components/FullLiveGame'

class FullLiveGameContainer extends Component {

  constructor(props){
    super(props)
    this.handleCilck = this.handleCilck.bind(this)
  }

  componentWillMount(){
    this.props.getLiveGame(this.props.params.id)
  }

  handleCilck(){
    browserHistory.push("/")
  }

  render() {
    const game = this.props.details.event.competitions[0]

    return (
      <div className="mainContainer">
      <span className="selectors">
          <button type="button" className="button close" onClick={()=>this.handleCilck()}>
          GO BACK
          </button>
      </span>
          <span className="events">
                <FullLiveGame
                  statusDetail={game.status.detail}
                  homeTeam={game.competitors[0]}
                  awayTeam={game.competitors[1]}
                  situation={game.situation}
                  stats={game.stats}
                />
          </span>
          <span className="logo">
            <img src={require('../assets/images/mlblogo.png')} alt="MLB logo"/>
          </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { details: state.fullDetails };
}

export default connect(mapStateToProps,{getLiveGame})(FullLiveGameContainer)
