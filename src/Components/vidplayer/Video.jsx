import React from 'react'
import ReactPlayer from 'react-player'
import './video.css'
const Video = () => {
  return (

    <>
     <div className='mytext'>Namaste React</div>
    <div className='video'>
     
    <ReactPlayer height='240px'width='360px' controls url='https://youtu.be/KWkOMbY03uk'/> 
    <div className='line'></div>
    <ReactPlayer height='240px'width='360px' controls url='https://youtu.be/ZriNPL0HBjo'/>
    <div className='line'></div>
    <ReactPlayer height='240px'width='360px' controls url='https://youtu.be/0h7ETdJeBAo'/>


    </div>
    </>
  )
}

export default Video