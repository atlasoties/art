import React from "react";
import "./UserProfile.css";
import pic1 from '../Asset/img/Back1.jpg'
import Pic2 from '../Asset/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      avatar: null,
      isAvatarSet: false,
      followers: [],
      following: [],
      post: null,
      token: null
    }
  }

  fetchUserPost = async () => {
    const tokenStorage = localStorage.getItem('art-user');
    const token = JSON.parse(tokenStorage);
    const response = await axios.get('http://localhost:3030/post/getpost', {
      headers: {
        authorization: `Bearer ${token.token}`
      }
    });

    // let count = 0;
    // for (let i = 0; i < 10; i++) {
    //   if (response.data.hasOwnProperty(i)) {
    //     ++count;
    //   }
    // }
    console.log(response.data)
    this.setState({ post: response.data })
  }
  componentDidMount() {
    const userResponse = localStorage.getItem("art-user");
    const user = JSON.parse(userResponse);
    this.setState({ name: user.other.name, email: user.other.email, followers: user.other.followers, following: user.other.following, token: user.token });
    this.fetchUserPost();

  }
  followHandler = async () => {
    const tokenStorage = localStorage.getItem('art-user');
    const token = JSON.parse(tokenStorage);
    await axios.put(`http://localhost:3030/user/${token.other._id}/follow`,

      {
        headers: {
          authorization: `Bearer ${token.token}`
        }
      }
    ).then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
  componentDidUpdate() {
  }

  render() {
    return (
      <>

        <div className="profileCover">
          <img className="profileCoverImg" src={pic1} alt="" />
          <img className="profileUserImg" src={Pic2} alt="" />
        </div>

        <div className="profileInfo">
          <h4 className="profileName">
            {
              this.state.name
            }
          </h4>
          <span className="profilebio">Fake name t is my name</span>
        </div>
        <div className="since">
          <div className="following">
            <span>{this.state.following.length}</span>
            <span>following</span>
          </div>
          <div className="followers">
            <span>{this.state.followers.length}</span>
            <span>followers</span>
          </div>
          <div className="posts">
            <span>{this.state.post}</span>
            <span>posts</span>
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.followHandler}>Follow</button>
          <button>Chat</button>
        </div>



      </>
    );
  }
}
export default Profile;