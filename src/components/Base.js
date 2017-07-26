import React, { Component } from 'react';
import classNames from 'classnames'

class Base extends Component{

  render(){
    var first = classNames({
        'base': true,
        'playerOn': this.props.first !== 0,
        'playerOff':this.props.first === 0
      })

    var second = classNames({
        'base': true,
        'playerOn': this.props.second !== 0,
        'playerOff':this.props.second === 0
      })

    var third = classNames({
        'base': true,
        'playerOn': this.props.third !== 0,
        'playerOff':this.props.third === 0
      })

    return (
        <div className="baseContainer">
          <div className="bases">
            <div id="first" className={first}></div>
            <div id="second" className={second}></div>
            <div id="third" className={third}></div>
          </div>
          <div className="outs">
            <p>{this.props.outs} Outs</p>
          </div>
        </div>
      );
  }
}

export default Base;
