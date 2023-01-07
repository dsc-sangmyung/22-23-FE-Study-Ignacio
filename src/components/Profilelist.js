import React from "react"
import './Profilelist.css'

function ProfileList(props) {
  return (
    <div className="profile-list">
      <div className="list-profile-pic"></div>
      <div className="list-profile-id">
        <div id="list-profile-recommend-id">{props.id}</div>
        <div id="list-profile-recommend-sub">{props.sub}</div>
      </div>
      <div className="blank" />
      <div className="list-profile-follow-button">팔로우</div>
    </div>
  )
}

export default ProfileList