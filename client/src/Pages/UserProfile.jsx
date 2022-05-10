import React from "react";
import "./UserProfile.css";
import pic1 from '../asset/img/Back1.jpg'
import Pic2 from '../asset/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'


class Profile extends React.Component{
    render() {
  return (
    <>
      

            <div className="profileCover">
              <img className="profileCoverImg"src={pic1} alt=""/>
              <img className="profileUserImg" src={Pic2} alt=""/>
              </div>

            <div className="profileInfo">
                <h4 className="profileName">Selame</h4>
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
            <div className="buttons">
              <button>Follow</button>
              <button>Chat</button>
            </div>
            
         
     
    </>
  );
}}
export default Profile;