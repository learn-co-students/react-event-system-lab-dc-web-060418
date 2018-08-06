// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

  focus = () => {
    return console.log("Good!")
  }

  blur = () => {
    return console.log("Hey! Eyes on me!")
  }

  render() {
    return(
      <button onFocus={this.focus} onBlur={this.blur}/>
    )
  }

}

export default EyesOnMe
