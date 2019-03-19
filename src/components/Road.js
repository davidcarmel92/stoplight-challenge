import React, { Component } from 'react';
import classnames from 'classnames'

class Road extends Component {
  render() {

    const roadStyles = classnames("road", {
      "vertical": this.props.direction === "vertical",
      "horizontal": this.props.direction === "horizontal"
    })

    return (
      <div className={roadStyles}></div>
    );
  }
}

export default Road;
