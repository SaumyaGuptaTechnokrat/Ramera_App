import {useState, useSyncExternalStore} from 'react';
import Online from './Online';
import SideBar from './SideBar';
import './MainInterface.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
export default function MainInterface() {
  const [isShown, setIsShown] = useState(false);
  
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    setDisplay(false);
  };
  const [display, setDisplay]= useState(false);
  const Friends1 = event => {
    setDisplay(i=>!i);
    setIsShown(false);
  }
  return (
    <div className="MainInterface">
      <div className="UpperDivBox"> 
                        <div onClick={Friends1} className="Aswitchbar">Friends</div>  
                        <div onClick={handleClick} className="Aswitchbar" >Online</div>
                        <div  className="Aswitchbar">All</div>
                        <div className="Aswitchbar">Pending</div>
                        <div className="Aswitchbar" >Blocked</div>
                        <div className="Aswitchbar" id="addfrnd">Add Friend</div>                        
      </div>
      <hr className="line"></hr>
      <div id="inputdiv">
                <input placeholder="search"  className="inputbox"></input>
                
      </div>
      
      {isShown ? <Online /> : null}
      {display && <Friend/>}
    </div>
  );
}
function Friend() {
  return (
    <div className='frnd'>
      Friends
    </div>
  );
}