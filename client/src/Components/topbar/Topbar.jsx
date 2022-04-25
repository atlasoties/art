import "./topbar.css";
import React from "react";
import { onlineUsers } from "../../userdata";
import LoginLogout from "../links/link.component";

class Topbar extends React.Component{
  // constructor()
  // {
  //   super();
  //   this.state={
  //     onlineUsers
  //   }
  // }
  render(){
  return (
    
    <div className="topbar">
      <div className="top-bar-profile">
      <div><img className="topbar-profile" src={onlineUsers[8].uimg} alt= {onlineUsers[8].name} /></div> 
      
      <div className="topbar-profile-name">
    {onlineUsers[8].name}
    </div>
    </div>
    <div className="topbar-button">
    <LoginLogout place={'/artupload'} placeName={'Upload your art'}/>
    </div>
    </div>

  );
}
}
export default Topbar;