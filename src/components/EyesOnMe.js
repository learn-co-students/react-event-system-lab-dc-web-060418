// Code EyesOnMe Component Here
import React, {Component} from "react";

class EyesOnMe extends Component {

    onFocusHandler(){
        console.log("Good!")
    }

    onBlurHandler(){
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (<button onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}></button>)
    }
}

export default EyesOnMe