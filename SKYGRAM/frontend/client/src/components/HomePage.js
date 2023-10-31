import React from 'react'
import './HomePage.css'
import NavBar from './NavBar'
import Feed from './Feed'

function HomePage({feed}) {

    return (
    <div className='HomePage'>
        <div className='homepage__nav'>
        <NavBar />
        </div>
        <div className='homepage__feed'>
        <Feed feed={feed}/>
        </div>

    </div>
        
    )
}

export default HomePage