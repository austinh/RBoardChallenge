import React from 'react';
import Base from './Base'

const FullLiveGame = (props)=> {

    const currentPitcher = (<p>Pitcher: {props.situation.currentPitcher.shortName}</p>)
    const currentBatter =  (<p>Batter: {props.situation.currentBatter.shortName}</p>)

    return (
      <div className="fullLiveGame">
        <div>
              <div className="innigDetail">
                <p>{props.statusDetail}</p>
              </div>
             <div className="homeTeam">
              <div className="centerContainer">
                <div className="teamStats">
                 <h4>{props.homeTeam.team.name}</h4>
                 <p>Record: {props.homeTeam.team.record.summary}</p>
                 {props.situation.isInningBottom ? currentBatter : currentPitcher}
                </div>
                <div className="teamScore">
                 <p>{props.homeTeam.score}</p>
                 </div>
                </div>
             </div>
             <div className="fullLiveGameStats">
              <div className="centerContainer">
                <div className="interactiveBases">
                   <Base
                   outs={props.situation.outs}
                   first={props.situation.onFirst}
                   second={props.situation.onSecond}
                   third={props.situation.onThird}
                   />
                 </div>
                 <div className="currentSituation">
                   <p>"{props.situation.lastAtBatResult}"</p>
                 </div>
               </div>
             </div>
             <div className="awayTeam">
               <div className="centerContainer">
                  <div className="teamStats">
                   <h4>{props.awayTeam.team.name}</h4>
                   <p>Record: {props.awayTeam.team.record.summary}</p>
                   {props.situation.isInningTop ? currentBatter : currentPitcher}
                  </div>
                  <div className="teamScore">
                   <p>{props.awayTeam.score}</p>
                  </div>
                </div>
             </div>
         </div>
      </div>
    );
}

export default FullLiveGame;
