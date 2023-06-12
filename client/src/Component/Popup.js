import './Popup.css'
import React from 'react'
export default function Popup({msg,resetform}){
    return(
        <div className='popup'>
            <div className='popupcontent'>
                <span className='popup-msg'>{msg}</span>
                <span className='close' onClick={resetform}>X</span>
            </div>
        </div>
    )
}