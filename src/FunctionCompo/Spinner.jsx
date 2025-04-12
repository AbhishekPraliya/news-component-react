import React from 'react'
import Runningsnake from "./Runningsnake.gif"
export default function NewsItem(){
    return (
        <div className='text-center' style={{zIndex:"200"}}>
            <img src={Runningsnake} alt="Loading..."/>
        </div>
    )
}

