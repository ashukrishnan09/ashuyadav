import React from 'react'
import {FaPlayCircle} from 'react-icons/fa'
import {FaPauseCircle} from 'react-icons/fa'
import {FaBackward} from 'react-icons/fa'
import {FaForward} from 'react-icons/fa'

function Controls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FaBackward icon={FaBackward} />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
               
                <FaPlayCircle/>
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
               
                <FaPauseCircle/>
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FaForward icon={FaForward} />
            </button>
        </div>
    )
}

export default Controls
