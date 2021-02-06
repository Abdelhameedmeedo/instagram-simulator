import '../css-files/personalFile.css'//css file
import meedoC from '../meedo1-c.jpg'// profile image
import computers from '../computers.jpg'//image
import computers1 from '../computers1.jpg'//image
import sea from '../sea.jpg'//image
import windows10 from '../windows10.jpg'//image
import star from '../star.jpg'//image
import amazon from '../amazon.jpg'//image
import Sheika from '../Sheika.jpg'//image
import mariem from '../mariem.jpg'//image
import adobe from '../adobe.jpg'//image
import bas from '../bas.jpg'//image
import joker1 from '../joker1.jpg'//image
import none from '../none.mp4'//video
import stTe from '../student&teacher.mp4'//video
import PerfectScrollbar from 'react-perfect-scrollbar'
import {FaHeart} from 'react-icons/fa'
import { AiFillPropertySafety } from 'react-icons/ai'
import { Fragment } from 'react'
const Personal = (props)=>{
    return(
        <Fragment>
        <div className="personal">
            <div className="container">
                <header className="hearder">
                    <h3>Profile</h3>
                </header>
                <div className="row row1">
                    <div className="col-lg-4 col-4">
                        <div className="cont">
                            <img src={meedoC}/>
                            <span className="p-name">Meedo_abdoo</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="cont">
                            <span className="number">40</span>
                            <span className="fol">Followers</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-4">
                        <div className="cont">
                            <span className="number">20</span>
                            <span className="fol">Friends</span>
                        </div>
                    </div>
                </div>
                {/*start description */}
                <div className="row row2">
                    <div className="col-lg-6 col-12">
                        <div className="desc">
                            <span className="">student at Computer Science</span>
                            <span className="">front-end developer</span>
                            <span className="re">Re <FaHeart/> </span>
                        </div>
                    </div>
                    <div className="col-lg-12 col-12">
                        <div className="desc">
                            <button className="btn btn-primary btn-md" onClick={()=>props.openUpdateSection()}>
                                edit profile
                            </button>
                        </div>
                    </div>
                </div>
                {/*end description */}
                <div className="p-info">
                    <h3>Photos & Videos</h3>
                    <div className="photos">
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <img src={computers}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={computers1}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={sea}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={mariem}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={star}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={windows10}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={Sheika}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={amazon}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={adobe}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={meedoC}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={bas}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <img src={joker1}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <video controls src={none}/>
                            </div>
                            <div className="col-lg-4 col-6">
                                <video controls src={stTe}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*udate profile */}
        <div className="update">
            <div className="container">
                <button onClick={()=>props.closeUpdateSection()}>X</button>
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <h3>Update profile</h3>
                    </div>
                    <div className="col-lg-12">
                        <input type="file" classNamae="fi" placeholder="change your profile image"/>
                    </div>
                    <div className="col-lg-12">
                        <input 
                            type="text" className="change-name" 
                            placeholder="change your profile name"
                            onKeyPress = {(e)=>props.updateName(e)}
                        />
                    </div>
                    <div className="col-lg-12">
                        <input type="submit" className="agree" />
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default Personal