import React from "react"
import './Sidebar.css'
import { Link } from "react-router-dom"
import { GrHomeRounded } from 'react-icons/gr'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineCompass } from 'react-icons/ai'
import { TbSend } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiPlusSquare } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'


function side() {
    return (
        <div className="side">
            <div className="logo">
            <img id="sidelogo" src={require('../assets/Instagram_logo.png')}/>
            </div>
            <div className="side-list">
                <div className="side-home">
                    <li>
                        <Link to={"/"}>
                            <GrHomeRounded id="home-icon"/>홈
                        </Link>
                    </li>
                </div>
                <div className="side-search">
                    <li>
                        <Link to={"/"}>
                            <FiSearch id="search-icon"/>검색
                        </Link>
                    </li>
                </div>
                <div className="side-look">
                    <li>
                        <Link to={"/"}>
                            <AiOutlineCompass id="look-icon"/>탐색 탭
                        </Link>
                    </li>
                </div>
                <div className="side-message">
                    <li>
                        <Link to={"/"}>
                            <TbSend id="message-icon"/>메시지
                        </Link>
                    </li>
                </div>
                <div className="side-Noti">
                    <li>
                        <Link to={"/"}>
                            <AiOutlineHeart id="Noti-icon"/>알림
                        </Link>
                    </li>
                </div>
                <div className="side-make">
                    <li>
                        <Link to={"/"}>
                            <FiPlusSquare id="make-icon"/>만들기
                        </Link>
                    </li>
                </div>
                <div className="side-more">
                    <li>
                        <Link to={"/"}>
                            <AiOutlineMenu id="more-icon"/>더 보기
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default side;