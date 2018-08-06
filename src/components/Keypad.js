// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    textToPutOut(){
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password" name="enter" onKeyUp={this.textToPutOut}/> 
        )
    }

}