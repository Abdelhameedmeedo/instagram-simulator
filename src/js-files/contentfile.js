import React, { Fragment } from 'react'
import '../css-files/contentfile.css'//css file
//import {Scrollbars} from 'rc-scrollbars'
//import ReactScrollbar  from 'react-scrollbar-js'
import meedo from '../meedo1-c.jpg'//image
import zamalek from '../zamalek.jpg'//image
import Sheika from '../Sheika.jpg'//image
import meedo2 from '../meedo2.jpg'//image
import meedo3 from '../meedo3.jpg'//image
import meedo4 from '../meedo4.jpg'//image
import meedo5 from '../meedo5.jpg'//image
import adobe from '../adobe.jpg'//image
import amazon from '../amazon.jpg'//image
import romantic5 from '../romantic5.jpg'//image
import mariem from '../mariem.jpg'//image
import joker1 from '../joker1.jpg'//image
import Basbosa from '../bas.jpg'//image
import {BiPlus} from 'react-icons/bi';//icon
import {FaEllipsisV,FaComment,FaHeart,FaPaperPlane} from 'react-icons/fa'//icon
const ContentFile = (props)=>{
    return(
        <Fragment>
        {/*start first one */}
        <div className="content">
            <div className="container">
                {/*start story */}
                <div className="row story-row">
                    <div className="col-lg-2 col-2">
                        <div className=" story main-image"> 
                            <img className = "story-image first-img" src={meedo} alt="main image"/>
                            <BiPlus/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3">
                        <div className="story">
                            <img className = "story-image" src={meedo3}/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3">
                        <div className="story">
                            <img className = "story-image" src={meedo4} alt="fourth image"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3">
                        <div className="story">
                            <img className = "story-image" src={meedo5} alt="fifth image"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-2 last">
                        <div className="story">
                            <img className = "story-image" src={meedo2} alt="fifth image"/>
                        </div>
                    </div>
                </div>
                    {/*end story images */}
                <div className="div1 div">
                    <div className="row">
                        <div className="col-lg-4 col-4">
                            <div className="main-img">
                                <img src={meedo}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="name">
                                <span>meedo_abdoo</span>
                                <i class="fas fa-minus-circle" title="click to remove" onClick={()=>props.delFunction()}></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="right-columns"> 
                                <FaEllipsisV onClick={()=>props.contentRightColumns()} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="full-img">
                                <img src={joker1}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont heart"> <FaHeart/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaComment/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaPaperPlane/> </div>
                        </div>                   
                    </div>
                </div>
                <div className="div2 div">
                    <div className="row">
                        <div className="col-lg-4 col-4">
                            <div className="main-img">
                                <img src={Basbosa}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="name">
                                <span>Rewaa</span>
                                <i class="fas fa-minus-circle" title="click to remove" onClick={()=>props.delFunction()}></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="right-columns"> 
                                <FaEllipsisV onClick={()=>props.contentRightColumns()} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="full-img">
                                <img src={Sheika}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont heart"> <FaHeart /> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaComment/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaPaperPlane/> </div>
                        </div>
                    </div>
                </div>
                <div className="div3 div">
                    <div className="row">
                        <div className="col-lg-4 col-4">
                            <div className="main-img">
                                <img src={mariem}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="name">
                                <span>Mariem_Omar</span>
                                <i class="fas fa-minus-circle" title="click to remove" onClick={()=>props.delFunction()}></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="right-columns"> 
                                <FaEllipsisV onClick={()=>props.contentRightColumns()}/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="full-img">
                                <img src={mariem}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont heart"> <FaHeart/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaComment/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaPaperPlane/> </div>
                        </div>                   
                    </div>
                </div>
                <div className="div4 div">
                    <div className="row">
                        <div className="col-lg-4 col-4">
                            <div className="main-img">
                                <img src={zamalek}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="name">
                                <span>Malik</span>
                                <i class="fas fa-minus-circle" title="click to remove" onClick={()=>props.delFunction()}></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="right-columns"> 
                                <FaEllipsisV onClick={()=>props.contentRightColumns()}/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="full-img">
                                <img src={romantic5}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont heart"> <FaHeart/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaComment/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaPaperPlane/> </div>
                        </div>                   
                    </div>
                </div>
                <div className="div5 div">
                    <div className="row">
                        <div className="col-lg-4 col-4">
                            <div className="main-img">
                                <img src={amazon}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="name">
                                <span>Amazon.Co</span>
                                <i class="fas fa-minus-circle" title="click to remove" onClick={()=>props.delFunction()}></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="right-columns"> 
                                <FaEllipsisV onClick={()=>props.contentRightColumns()}/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="full-img">
                                <img src={adobe}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont heart"> <FaHeart/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaComment/> </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="cont"> <FaPaperPlane/> </div>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}
export default ContentFile