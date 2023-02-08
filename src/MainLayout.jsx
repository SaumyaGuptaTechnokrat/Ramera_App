import { Component, useState } from "react";
import SideBar from "./SideBar";
import MainInterface from "./MainInterface";
import App from "./App";
import m from "./frnds.png";
import f from "./persons.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass, faPhone, faPlus, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import MessageRequest from "./MessageRequests";


function MainLayout(){
        const[display,setDisplay]=useState(true);
        const onclick = event =>{
            setDisplay(i=>!i);
            setDisplayM(false);
        }
        const[displayM,setDisplayM]=useState(false);
        const onclickM = event =>{
            setDisplayM(i=>!i);
            setDisplay(
                false
            );
        }
        return (
            <>
                <div className="MainLayout">
                    <SideBar/>

                    <div className="MiddleBar">
                 <div className="MiddleUpper">
                         
                     <input className="inputMiddle" placeholder="Find or Start a conversation"/>

                     </div>
                     <hr></hr>
                     <div className="frndormessage">
                         <div className="pointer" onClick={onclick}><p ><sup><FontAwesomeIcon icon={faPhone} /></sup><FontAwesomeIcon icon={faUser} /></p></div>
                         <div className="pointer" onClick={onclick}><p>Friends</p></div>
                         <div><FontAwesomeIcon className="pointer" onClick={onclickM} icon={faEnvelope} /> </div>
                         <div className="pointer" onClick={onclickM}> Message Requests</div>
                         
                     </div>
                         
                     <div id="dirmessg">
                         <div>DIRECT MESSAGES+</div>
                         
                     </div>
                     <div id="grps">
                         <div className="group"><p  className="icon green"><FontAwesomeIcon  icon={faUserGroup}/></p><p>Crypserve, BeardedBro</p></div>
                         <div className="group"><p className="icon yellow"><FontAwesomeIcon  icon={faUserGroup}/></p><p>BeardedBro</p></div>
                         
                         <div className="group"><p className="icon orange"><FontAwesomeIcon  icon={faUserGroup}/></p><p>NFT</p></div>
                         
                         <div className="group"><p className="icon red"><FontAwesomeIcon  icon={faUserGroup}/></p><p>Clinarix Support</p></div>
                         
                         <div className="group"><p className="icon green"><FontAwesomeIcon  icon={faUserGroup}/></p><p>BLOCKCHAIN BOYS</p></div>
                         
                         <div className="group"><p className="icon yellow"><FontAwesomeIcon  icon={faUserGroup}/></p><p>immy8285, Lilythty, St..</p></div>
                         
                         <div className="group"><p className="icon orange"><FontAwesomeIcon  icon={faUserGroup}/></p><p>Sad Clown Collective</p></div>
                         
                         <div className="group"><p className="icon red"><FontAwesomeIcon  icon={faUserGroup}/></p><p>RocksPalNFT</p></div>
                         

                     </div>
             </div>
            {display && <MainInterface/>}
            {displayM && <MessageRequest/>}         
                </div>
            </>
        );
    }

export default MainLayout;
