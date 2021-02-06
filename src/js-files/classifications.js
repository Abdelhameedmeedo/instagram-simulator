import React ,{useState, Fragment}from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import '../css-files/classification.css'
import {AiTwotoneHome,AiFillSetting} from 'react-icons/ai'
import {FaHeart,FaToggleOn} from 'react-icons/fa'
import {GiThreeFriends} from 'react-icons/gi'
import {GoSearch} from 'react-icons/go'
import {BsBoxArrowLeft} from 'react-icons/bs'
import {VscColorMode} from 'react-icons/vsc'
const SettingKinds = (props)=>{    
    return(
      <Fragment>
        <div className="setting-file">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="cont">
                            <div className="effect-cont" onClick={()=>props.homePage()}>
                                <AiTwotoneHome/> <span>Home</span>
                            </div>
                        </div>
                    </div>
                    <div className="clear-fix"></div>
                    <div className="col-lg-8 col-12">
                        <div className="cont">
                            <div className="effect-cont">
                                <GiThreeFriends/>  <span>Friends</span>
                            </div>
                        </div>
                    </div>
                    <div className="clear-fix"></div>
                    <div className="col-lg-8">
                        <div className="cont">
                            <div className="effect-cont">
                                <FaHeart/>  <span>Likes</span>
                            </div>
                        </div>
                    </div>
                    <div className="clear-fix"></div>
                    <div className="col-lg-8">
                        <div className="cont">
                            <div className="effect-cont">
                                <GoSearch/> <span>Search</span>
                            </div>
                        </div>
                    </div>
                    <div className="clear-fix"></div>
                    <div className="col-lg-8">
                        <div className="cont">
                            <div className="effect-cont darkmode">
                               {/*<FaToggleOn  onClick={()=>props.DarkModeClick()}/> <span>Dark mode</span>*/}
                               <i class="fas fa-sun" onClick={()=>props.DarkModeClick()} title="click here"></i>
                               <i class="fas fa-moon" onClick={()=>props.lightModeClick()} title="click here"></i>
                               <span>Dark mode</span> 
                            </div>
                        </div>
                    </div> 
                    <div className="clear-fix"></div>
                    <div className="col-lg-8">
                        <div className="cont">
                            <div className="effect-cont setting-span" onClick={()=>props.openSettingPage()}>
                                <AiFillSetting/>  <span>Settings</span>
                            </div>
                        </div>
                    </div>
                    <div className="clear-fix"></div>
                    <div className="col-lg-8">
                        <div className="cont">
                            <div className="effect-cont" onClick={()=>props.openLoginForm()}>
                                <BsBoxArrowLeft/>  <span>Log Out</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*setting span */}
        <div className="setting-element">
            <div class="container">
                <div class="row">
                    <button onClick={()=>props.closeSettingPage()}>X</button>
                    <div className="col-lg-12" onClick={()=>props.deleteYourProfile()}>
                        <i class="fas fa-user-times"></i>
                        <span>delete profile</span>
                    </div>
                    <div className="col-lg-12">
                        <i class="fas fa-history"></i>
                        <span>search history</span>    
                    </div>
                    <div className="col-lg-12" onClick={()=>props.addAccount()}>
                        <i class="fas fa-address-card"></i>
                        <span>add account</span>
                    </div>    
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default SettingKinds