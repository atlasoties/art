import "./online.css";
import React from 'react'
import { onlineUsers } from "../../userdata";
class Online extends React.Component {
  constructor(props) {
    super();
    this.state = {
      onlineUsers
    };
  }


  render() {
    return (
      <div className="rightbar-online">
        <div className="online-phone">
          Your Active Friends
        </div>
        <div className="rightbarFriend">
          <div class="right-bar-menu">Your Active Friends</div>
          {
            this.state.onlineUsers.map(online =>
              <div className="to-make"><div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={online.uimg} alt={online.name} />
                <div className="rightbarOnline"></div>
              </div><div className="rightbarUsername">{online.name}</div></div>
            )};
        </div>
      </div>
    );
  }
}
export default Online;
