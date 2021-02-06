import {React,Component }from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import $ from 'jquery'//using jqeury
import './App.css';//css file for app component
// js files
import NavBar from './js-files/navBar'
import ContentFile from './js-files/contentfile'
import SettingKinds from './js-files/classifications'
import Personal from './js-files/personalFile'
import LogIn from './js-files/login'
import Footer from './js-files//footer'
import { FaDoorClosed } from 'react-icons/fa';
class App extends Component {
  ///////////start document functions///////////////////
  //dark mode function
  DarkModeClick = ()=>{
    document.body.classList.add("dark-mode");
    $(function(){
      $('.fa-sun').css("display","none");
      $('.fa-moon').css({
        display:"block",
        position:"relative",
        left:-30
      });
      $('.darkmode span').css({
        position:"relative",
        bottom:20,
        left:20
      });
    })
  }
  //light-mode (remove dark mode)
  lightModeClick = ()=>{
    document.body.classList.remove("dark-mode");
    $(function(){
      $('.fa-moon').css("display","none");
      $('.fa-sun').css({display:"block",position:"relative",left:-30});
    })
  }
  //////////////////////end document functions//////////////////////////
  ///////////////////////start nav (msg)functions////////////////////
  //open messege component with clicking on inbox icon (inside nav component)
  openMseComponent = ()=>{
    let msgComponent = document.querySelector('.msg');
    let nav = document.querySelector('nav .fa-inbox');
    msgComponent.style.display = "block";
  }
  //close function for messege component (inside nav component)
  messegeComponenetClose = ()=>{
    let closeMes = document.querySelector('.msg'); 
    closeMes.style.display = "none";
  }
  //delete message if you dont want it(inside nav component) 
  popMsg = ()=>{
      $(function(){
        $('.fa-times-circle').on('click',(e)=>{
          e.target.parentElement.parentElement.parentElement.remove();
        })
      })
  }
  //add nrew messege
  addNewMsg = ()=>{
    let addNewMsgBtn = document.querySelector('.msg-overlay .new-name');
    let msgContainer = document.querySelector('.msg .container');
    document.addEventListener('change',e=>{
        if(e.target.className == "new-name"){
          let createSpan = document.createElement('span');
          createSpan.className = "new-msg";
          let createSpanText = document.createTextNode(addNewMsgBtn.value);
          createSpan.appendChild(createSpanText);
          msgContainer.appendChild(createSpan);
          //createSpan.innerHTML = e.target.value;
          addNewMsgBtn.value = ``;
        }
    })

  }
  //overlay to add new messege name
  newMsgOverlay = ()=>{
    let newMsgOverlay = document.createElement('div');//overlay
    newMsgOverlay.className = "msg-overlay";
    document.body.appendChild(newMsgOverlay);
    let newMsgContainer = document.createElement('div');//overlay container
    newMsgContainer.className = "msg-container";
    newMsgOverlay.appendChild(newMsgContainer);
    let buttonClose = document.createElement('button');//close btn
    buttonClose.textContent = "x";
    buttonClose.className = "msg-closebtn";
    buttonClose.onmouseenter = this.closeNewMsg();
    newMsgContainer.appendChild(buttonClose);
    let input = document.createElement('input');//input
    input.type = "text";
    input.className = "new-name";
    newMsgContainer.appendChild(input);
    let buttonAdd = document.createElement('button');//add btn
    buttonAdd.textContent = "add";
    buttonAdd.className = "btn-add";
    buttonAdd.onclick = this.addNewMsg();
    newMsgContainer.appendChild(buttonAdd);

  }
  //close new messege overlay
  closeNewMsg = ()=>{
    document.addEventListener('click',e=>{
      if(e.target.className == "msg-closebtn"){
        document.querySelector('.msg-overlay').remove();
      }
    })
  }
  /////////////////end nav (msg) functions/////////////////////////////
  ////////////////start content component//////////////////////////////
  //columns function popup and delete (content component)
  contentRightColumns = ()=>{
    //popup overlay
    let contColumns = document.createElement('div');
    contColumns.className = "c-overlay";
    document.body.appendChild(contColumns);
    //overlay container
    let contContainer = document.createElement('div');
    contContainer.className = "c-container";
    contColumns.appendChild(contContainer);
    //container div for spans
    let spansContainer = document.createElement('div');
    spansContainer.className = "spans-cont";
    contContainer.appendChild(spansContainer);
   //span one
   let span1 = document.createElement('span');
   span1.textContent = "unfollow";
   spansContainer.appendChild(span1);
    //span second
    let span2 = document.createElement('span');
    span2.textContent = "save post";
    spansContainer.appendChild(span2); 
    //span third
    let span3 = document.createElement('span');
    span3.textContent = "report";
    spansContainer.appendChild(span3);
    //span fourth
    //let span4 = document.createElement('span');
    //span4.textContent = "delete";
    //spansContainer.appendChild(span4);
    //close btn
    let closebtn = document.createElement('span');
    closebtn.className = "close-btn";
    closebtn.textContent = "X";
    closebtn.onclick = this.closeContentOverlay(); //call close-content-overlay
    spansContainer.appendChild(closebtn);
  }
  //close content component overlay by clicking on btn
  closeContentOverlay = ()=>{
    //let closeForm = document.querySelector('.c-overlay .close-btn');
    document.addEventListener('click',e=>{
      if(e.target.className == "close-btn"){
        e.target.parentNode.remove();
        document.querySelector('.c-overlay').remove();
      }
    })
  }
  delFunction = ()=>{
    $(function(){
        $('.fa-minus-circle').on('click',(e)=>{
          e.target.parentElement.parentElement.parentElement.parentElement.remove();
        })
    })
  }
  ////////////////////end content component//////////////////
  ///////////////////start setting component/////////////////////
    // open login sing out for by clicking on log-out btn (setting component)
    openLoginForm = ()=>{
      let login = document.querySelector('.login');
      let settingComponent = document.querySelector('.setting-file');
      let personalComponent = document.querySelector('.personal');
      let contentComponent = document.querySelector('.content');
      login.style.display = "block";
      settingComponent.style.display = "none";
      personalComponent.style.display = "none";
      contentComponent.style.display = "none";
    }
    //when you clicking on home element (sitting component)
    homePage = ()=>{
      let contentPage = document.querySelector('.content');
      let personalPage = document.querySelector('.personal');
      contentPage.style.display = "block";
      personalPage.style.display = "block";
    }
    //open setting element
    openSettingPage = ()=>{
      let setting = document.querySelector('.setting-element');
      setting.style.display = "block";
    }
    //close setting element
    closeSettingPage = ()=>{
      let setting = document.querySelector('.setting-element');
      setting.style.display = "none";
    }
    //delete your profile الى حدما تمام
    deleteYourProfile = ()=>{
      //let delContentComponent = document.querySelector('.content');
      //let delSettingComponent = document.querySelector('.setting-element,.setting-file');
      //let delPersonalComponent = document.querySelector('.personal,.update');
      //let arr = [delContentComponent,delPersonalComponent,delSettingComponent];
      document.querySelector('.personal,.content,.setting-file,.msg').remove();
      document.querySelector('.setting-element').remove();
      this.openLoginForm()
    }
    //clicking on add account
    addAccount = ()=>{
      this.openLoginForm();
    }
    //////////////end setting component////////////////////
    /////////////start personal component //////////////// 
    //open update section by clicking on edit btn(personal component)
    openUpdateSection = ()=>{
      document.querySelector('.update').style.display = "block";
      document.querySelector('.update').style.top = "66px";
      let update = document.querySelector('.update');
      if(update.style.display == "block"){
        update.style.top = "-718px";
      }
      document.querySelector('.personal').style.display = "none";
    }
    //close update section and open personal (personal component)
    closeUpdateSection = ()=>{
      document.querySelector('.update').style.display = "none";
      document.querySelector('.personal').style.display = "block";
    }
    //update section itself (inside personal component)
    updateName = (e)=>{
      //use keypress
      //let personalName = document.querySelector('.personal .p-name');
      //let update = document.querySelector('.change-name');
      //update.addEventListener('keypress',(e)=>{
        //personalName.innerHTML = e.target.value;
      //})
      ///that
      let personalName = document.querySelector('.personal .p-name');
      if(typeof(Storage) !== "undefined"){
        localStorage.setItem('pname',e.target.value);
        personalName.innerHTML = localStorage.getItem('pname');
      }
    }
    /////////////////end personal component////////////////////
    ///////////start footer ///////////
    //open home section
    footerHome = ()=>{
      document.querySelector('.content').style.display = "block";
      document.querySelector('.setting-file').style.display = "none";
      document.querySelector('.personal').style.display = "none";
    }
    //open setting section
    footerSetting = ()=>{
      document.querySelector('.setting-app').style.display = "block";
      document.querySelector('.setting-file').style.display = "block";
      document.querySelector('.content').style.display = "none";
      document.querySelector('.personal').style.display = "none";
    }
    //open profile section
    footerProfile = ()=>{
      document.querySelector('.personal').style.display = "block";
      document.querySelector('.content').style.display = "none";
      document.querySelector('.setting-file').style.display = "none";
    }
    //////////end footer ///////////
  render(){
    return (
      <div className="App">
        <div className="container-xll full-app">
          <div className="row">
           <div className="col-lg-12 col-12">
              <div className="app-cont"> 
                <NavBar openMseComponent = {this.openMseComponent} 
                        close = {this.messegeComponenetClose}
                        popMsg = {this.popMsg}
                        newMsgOverlay = {this.newMsgOverlay}
                /> 
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="app-cont"> <LogIn/></div>
            </div>
            <div className="col-lg-5 col-12 content-app">
              <div className="app-cont app-center"> 
                <ContentFile 
                    contentRightColumns = {this.contentRightColumns}
                    delFunction = {this.delFunction}
                    heartClicking = {this.heartClicking}
                /> 
              </div>
            </div>
            <div className="col-lg-2 col-12 setting-app">
              <div className="app-cont"> 
                <SettingKinds DarkModeClick = {this.DarkModeClick}
                              lightModeClick = {this.lightModeClick}
                              openLoginForm = {this.openLoginForm}
                              homePage = {this.homePage}
                              openSettingPage = {this.openSettingPage}
                              closeSettingPage = {this.closeSettingPage}
                              addAccount = {this.addAccount}  
                              deleteYourProfile = {this.deleteYourProfile}
                />
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-5 col-12 personal-app">
              <div className="app-cont"> 
                <Personal 
                  openUpdateSection = {this.openUpdateSection}
                  closeUpdateSection = {this.closeUpdateSection}
                  updateName = {this.updateName}
                /> 
              </div>
            </div>
            <div className="col-12">
              <div className="app-cont">
                <Footer 
                  footerHome = {this.footerHome}
                  footerSetting = {this.footerSetting}
                  footerProfile = {this.footerProfile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
  
}

export default App;
