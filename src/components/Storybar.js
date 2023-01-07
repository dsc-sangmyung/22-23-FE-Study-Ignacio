import React from 'react';
import './Storybar.css';


function Storybar(props){
    return(
        <div className='story-bar'>
            <img className='story-pic' src={require('../assets/insta.jpg')}></img>
            <div className='story-id'>{props.id}</div>
        </div>
    )
}

export default Storybar;