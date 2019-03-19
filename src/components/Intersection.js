import React, { Component } from 'react';
import Road from './Road';
import StopLight from './StopLight';

class Intersection extends Component {

  state = {
    currentDirection: 'west',
    loopLight: true,
    yellow: false
  }

  componentDidMount(){
    this.timer()
  }

  timer = () => {
    setTimeout(() => {
      this.setState(prevState => ({
        yellow: !prevState.yellow
      }), () => {
        setTimeout(() => {
          this.onChangeLight();
          this.timer()
          this.setState(prevState => ({
            yellow: !prevState.yellow
          }))
        }, 1000);
      });
    }, 4000);
  }

  onChangeLight = () => {
    if(this.state.currentDirection === 'west'){
        this.setState({ currentDirection: 'north' });
      }
    else {
        this.setState({ currentDirection: 'west' });
      }
  }

  render() {

    const { currentDirection, yellow } = this.state;
    return (
      <div className="intersectionc">
        <StopLight lightDirection={"north"} currentDirection={currentDirection} yellow={yellow}></StopLight>
        <StopLight lightDirection={"west"} currentDirection={currentDirection} yellow={yellow}></StopLight>
        <Road direction={"horizontal"}></Road>
        <Road direction={"vertical"}></Road>
      </div>
    );
  }
}

export default Intersection;
