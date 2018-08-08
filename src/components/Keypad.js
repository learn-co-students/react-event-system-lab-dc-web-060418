// Code Keypad Component Here
import React, {Component} from "react"


class Keypad extends Component {
    onKeyUpHandler = (e) => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input type="password" onKeyUp={this.onKeyUpHandler}/>
        )
    }
}

export default Keypad;