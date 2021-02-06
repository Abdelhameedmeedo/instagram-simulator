import React, { Fragment } from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import '../css-files/navbar.css'
import zamalek from '../zamalek.jpg'//image
import Sheika from '../Sheika.jpg'//image
import meedo2 from '../meedo2.jpg'//image
import amazon from '../amazon.jpg'//image
import mariem from '../mariem.jpg'//image
import Basbosa from '../bas.jpg'//image
const NavBar = (props)=>{
    return(
    <Fragment>
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-4">
                        <div className="nav-content">
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="col-lg-6 col-4">
                        <div className="nav-content">
                            <span>instagram</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-4">
                        <div className="nav-content inbox">
                            <i class="fas fa-inbox" onClick={()=>props.openMseComponent()}></i>
                            <i class="fas fa-paper-plane" onClick={()=>props.openMseComponent()}></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/*messege section */}    
        <div className="msg">
            <div className="container">
                <i class="fas fa-times" onClick={()=>props.close()}></i>
                {/*first msg */}
                <div className="row">
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <img src={zamalek}/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <span>houssam_faisal</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="msg-cont">
                            <i class="far fa-times-circle" onClick={()=>props.popMsg()}></i>
                        </div>
                    </div>
                </div>
                {/*end first msg */}
                {/*second msg */}
                <div className="row">
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <img src={mariem}/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <span>mariem_omar</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="msg-cont">
                            <i class="far fa-times-circle" onClick={()=>props.popMsg()}></i>
                        </div>
                    </div>
                </div>
                {/*end second msg */}
                {/*thired msg */}
                <div className="row">
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <img src={meedo2}/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <span>abdoo</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="msg-cont">
                            <i class="far fa-times-circle" onClick={()=>props.popMsg()}></i>
                        </div>
                    </div>
                </div>
                {/*end third msg */}
                {/*fourth msg */}
                <div className="row">
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <img src={Basbosa}/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <span>Rewaa</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="msg-cont">
                            <i class="far fa-times-circle" onClick={()=>props.popMsg()}></i>
                        </div>
                    </div>
                </div>
                {/*end fourth msg */}
                {/*fifth msg */}
                <div className="row">
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <img src={amazon}/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <span>Amazon.Co</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="msg-cont">
                            <i class="far fa-times-circle" onClick={()=>props.popMsg()}></i>
                        </div>
                    </div>
                </div>
                {/*end fifth msg */}
                {/*6 msg */}
                <div className="row">
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <img src={Sheika}/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-4'>
                        <div className="msg-cont">
                            <span>Sheikabala</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="msg-cont">
                            <i class="far fa-times-circle" onClick={()=>props.popMsg()}></i>
                        </div>
                    </div>
                </div>
                {/*end 6 msg */}
                {/*start last item in msg */}
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="msg-cont">
                            <i class="fas fa-comment-medical" onClick = {()=>props.newMsgOverlay()}> new messege</i>
                        </div>
                    </div>
                </div>
                {/*end last item in msg */}
            </div>
        </div>
    </Fragment>
    )
}
export default NavBar