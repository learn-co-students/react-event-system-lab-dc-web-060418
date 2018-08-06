// Code Keypad Component Here
import React,{ Component } from "react";

class Keypad extends Component {


    onKeyUpHandler(){
        console.log("Entering password...")
    }

    render() {
        return (<input onKeyUp={this.onKeyUpHandler} type="password" />)
    }
}

export default Keypad;