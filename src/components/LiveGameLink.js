import React from 'react';
import {Link} from 'react-router'

const LiveGameLink = (props)=> {
    return (
      <div className="LiveGameLink">
        <div className="playByPlay">
          <a href={props.link.href}>
            <p>Play By Play</p>
          </a>
        </div>
        <div className="fullLiveGameLink">
          <Link to={`live/${props.gameID}`}>
            <p>More Details</p>
          </Link>
        </div>
      </div>
    );
}

export default LiveGameLink;
