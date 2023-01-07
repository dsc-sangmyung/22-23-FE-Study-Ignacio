import React from "react";
import './Myprofile.css'

function MyProfile(props) {
  return (
    <div className="my-profile">
      <img className="pro-pic" src={require('../assets/insta.jpg')}/>
      <div className="profile-text">
        <div id="profile-id">{props.id}</div> 
        <div id="profile-name">{props.name}</div>
      </div>
      <div id="blank" />
      <div className="profile-change">
        전환
      </div>
    </div>
  )
}

export default MyProfile