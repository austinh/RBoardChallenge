import React from 'react';

const FinalGameLink = (props)=> {
    return (
      <div className="FinalGameLink">
        <div className="recap">
          <a href={props.links.recap.href}>
            <p>Recap</p>
          </a>
        </div>
        <div className="fullFinalGameLink">
          <a href={props.links.boxscore.href}>
            <p>Box Score</p>
          </a>
        </div>
      </div>
    );
}

export default FinalGameLink;
