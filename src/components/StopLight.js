import React, { Component } from 'react';
import classnames from 'classnames';

class StopLight extends Component {
  render() {

    const { currentDirection, lightDirection, yellow } = this.props;

    const stoplightStyles = classnames("stoplight", {
      "north": lightDirection === "north",
      "west": lightDirection === "west"
    })

    let stoplightUI;
    if((currentDirection === "north" && lightDirection === "north") || (currentDirection === "west" && lightDirection === "west")){
      if(yellow){
        stoplightUI = (<span className="blinker yellow"></span>);
      }
      else {
        stoplightUI = (<span className="blinker green"></span>);
      }

    }
    else {
      stoplightUI = (<span className="blinker red"></span>);
    }

    return (
      <div className={stoplightStyles}>
        {stoplightUI}
      </div>
    );
  }
}

export default StopLight;
