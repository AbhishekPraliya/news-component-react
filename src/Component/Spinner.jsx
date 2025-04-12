import React, { Component } from 'react'
import Runningsnake from "./Runningsnake.gif"
export default class Spinner extends Component {

    render() {
        return (
        <div className='text-center'>
            <img src={Runningsnake} alt="Loading..." style={{zIndex:"2",color:"blue"}}/>
        </div>
        )
    }
}

