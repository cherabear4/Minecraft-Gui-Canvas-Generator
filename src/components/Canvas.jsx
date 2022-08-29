import React, { Component } from 'react'

export default class Canvas extends Component {

  render() {
    return (
      <div className="p-[5rem]">
        
        <div className="justify-center" style={{ backgroundColor: this.props.color, color: this.props.color, width: this.props.x, height: this.props.y, opacity: this.props.opacity }}>&nbsp;</div>
      </div>
    )
  }
}
