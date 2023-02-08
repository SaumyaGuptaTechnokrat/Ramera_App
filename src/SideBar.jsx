import { Component } from "react";
import Contacts from "./Contacts.png";
import R from "./R.png";
import as from "./as.png";
import one from "./one.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideBar.css';
 
import { faArrowDown, faCompass, faEnvelope, faMagnifyingGlass, faPhone, faPlusCircle, faR, faUser, faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons';

class SideBar extends Component{
    render(){
        return (
            <>
                <div className="SideBar">
                    <div className="SideBarContent">
                        <img src={one} id="one" width="60%" height="50vh"/>
                        <h1 className="usergrp"><FontAwesomeIcon id="usergrp"  icon={faUserGroup} /></h1>
                        <h1 className=" compass R "><FontAwesomeIcon id="usergrp" icon={faR} /></h1>

                        <img src={as} width="45%" height="45vh" />

                        <h1 className="usergrp red"><FontAwesomeIcon id="usergrp"  icon={faUserGroup} /></h1>

                        <h1 className="compass"><FontAwesomeIcon  icon={faPlusCircle} /></h1>
                        <h1 className="compass"><FontAwesomeIcon  icon={faCompass} /></h1>
                        <h1 className="compass"><FontAwesomeIcon  icon={faArrowDown} /></h1>

                        
                    </div>
                </div>
            </>
        );
    }
    
}
export default SideBar;