import React from "react";
import "./UserProfile.css";
import pic1 from '../Asset/img/Back1.jpg'
import Pic2 from '../Asset/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'


class Profile extends React.Component{
  constructor()
    {
        super();
        this.state={
        uid:0, 
        classun:'profile-buttons',
        classot:'ed-pro',
    }
  }

componentDidMount(){
      if (this.state.uid===0)
      {
        this.setState({
          classun:'userbutton'
        })
      }
      else{
        this.setState({
          classun:'profile-buttons',
          classot:'hideus'
        })
      }
    }
    render() {
  return (
    <>
    
          <div className="profileCover">
              <img className="profileCoverImg"src={pic1} alt=""/>
              <img className="profileUserImg" src={Pic2} alt=""/>
              </div>

            <div className="profileInfo">
                <h4 className="profileName">selame</h4>
                <span className="profilebio">Fake name t is my name</span>
            </div>
            <div className="since">
                <div className="following">
                <span>0</span>
                <span>following</span>
                </div>
                <div className="followers">
                <span>0</span>
                <span>followers</span>
                </div>
                <div className="posts">
                <span>0</span>
                <span>posts</span>
                </div>
            </div>
            {this.Usercontroller}
            <div id='pb'className={this.state.classun}>
              <button className="btn-follow">Follow</button>
              <button className="btn-chat">Chat</button>
            </div>
            <div className={this.state.classot}>
            <center><button>edit-profile</button></center>
            </div>
            
         
     
    </>
  );
}}
export default Profile;