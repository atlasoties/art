import React from 'react';
import './post.css'
import likePost from '../../Asset/img/like.png';
import lovePost from '../../Asset/img/heart.png';
import { Link } from 'react-router-dom';
import plus from '../../Asset/img/plus.png'
import { onlineUsers } from '../../userdata';
import { Po } from '../../posts';
import Sidebar from '../../Components/sidebar/sidebar';
import Online from '../../Components/online/Online';
const a3 = Po.map(t1 => ({ ...t1, ...onlineUsers.find(t2 => t2.id === t1.id) }))
class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            a3,
            liked:false,
            count: 0,
            className:'comment-section',
            commentCounter:0,
        };

    }
 handleClick = ()=>{
        if(this.state.liked===false){
              this.setState({
                  count:this.state.count+1,
                  liked:true
              })
              }
              else if(this.state.liked===true){
                  this.setState({
                      count:this.state.count-1,
                      liked:false,
                  })
                  }
            }
       commentController=()=>
       {
      
              if(this.state.className==='comment-section')
              {   this.setState(
                  {  className:'comment-change'}
              )}
              else{
                  this.setState(
                      {className:'comment-section'}
                  )
              }
       }
       commentSubmitController=()=>
       {
      
           (this.setState({
               commentCounter:this.state.commentCounter+1,
              className:'comment-section'}))
       }
    render() {
        return (
            <div className="post">

                <Sidebar />

                {/* <Topbar/> */}

                <Online />

                <div className="post-per">
                   <Link to='/artupload'><img className='plus' src={plus} alt="" /></Link>
                    {this.state.a3.map(now =>
                        <div className='posters-elements' >
                            <div className='post-info'>
                                <img className='post-user-profile' src={now.uimg} alt={now.name} />

                                <div className='post-user-name' >{now.name}</div>
                            </div>
                            <hr />
                            <div className='post-thought'>{now.thought}</div>
                            <img className='post-pic' src={now.pic} alt={now.thought} />
                            <div className="l-post"onClick={this.handleClick}>
                                <div className="li-post"> <img className='like-post' src={likePost} alt="like" /></div>
                                <div className="lo-post"> <img className='love-post' src={lovePost} alt="love" /></div>
                                <span className="postLikeCounter"> {this.state.count}people like it</span>

                            </div>
                            <hr />
                            <div className="li-co-sh">
                                <div className="like-bo"onClick={this.handleClick}>
                                 {this.state.count}   Like
                                </div>
                                <div className="comment-bo"onClick={this.commentController}>
                                    {this.state.commentCounter}Comment
                                </div>
                                <div className="share-bo">
                                    Share
                                </div>
                            </div>
                <div className={this.state.className}>
              <input type='text' />
              <button  onClick={this.commentSubmitController} >comment</button>  
              </div>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}
export default Posts;