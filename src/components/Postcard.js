import React from "react";
import './Postcard.css'
import { Link } from "react-router-dom"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { AiOutlineHeart } from 'react-icons/ai'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'
import { BiBookmark } from 'react-icons/bi'
import { BiHappyHeartEyes } from 'react-icons/bi'


function Postcard(props) {
  return (
    <div className="post-box">
      <div className="post-head">
        <img className="post-img" src={require('../assets/insta.jpg')}/>
        <div id="post-head-info">
          <div id="post-id-location">
          <span className='post-name'>{props.name}</span>
            <div id="post-head-location">{props.location}</div>
          </div>
        </div>
        <div id="blank" />
            <HiOutlineDotsHorizontal id="more-icon" />
        </div>
        <div className="post-body">
            <img className="post-body-photo" src={require('../assets/insta.jpg')}/>
        </div>
        <div className="post-icon">
            <AiOutlineHeart id="heart-button"/>
            <IoChatbubbleOutline id="chat-button"/>
            <FiSend id="send-button"/>
            <div id="blank"/>
            <BiBookmark id="bookmark-button"/>
        </div>
        <div className="post-like">
            <div className="post-like-text">
                <Link to={"/"}>좋아요</Link>
            </div>
        </div>
        <div className="post-text">
            <div id="post-id">{props.id}</div>
        </div>
        <div className="post-comm">
            <div id="post-comm">댓글 {props.count_comm}개 모두 보기</div>
        </div>
        <div className="post-date">
            <div id="post-date">{props.date}일 전</div>
        </div>
        <div className="post-reaction">
            <BiHappyHeartEyes id="reaction" />
            <input type="text" id="reaction-text" placeholder="댓글 달기..." />
            <div id="post-button">게시</div>
        </div>
    </div>
  )
}

export default Postcard