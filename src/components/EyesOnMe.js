// Code EyesOnMe Component Here
import React, {Component} from "react"

class EyesOnMe extends Component {
    onFocusHandler() {
        console.log(`Good!`)
    }

    onBlurHandler() {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return (
            <button onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
                OMG Im a Button!
            </button>
        )
    }
}

export default EyesOnMe;