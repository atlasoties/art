import React from 'react';
import './post.css'
import Addicon from '../../Components/add-icons/Add-icon';
import likePost from '../../Asset/img/like.png';
import lovePost from '../../Asset/img/heart.png';
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
            classt:'comment-text'
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
                  {  className:'comment-change',
                    classt:'comment-text-change'}
              )}
              else{
                  this.setState(
                      {className:'comment-section',
                      classt:'comment-text'
                    }
                  )
              }
       }
       commentSubmitController=()=>
       {
      
           (this.setState({
               commentCounter:this.state.commentCounter+1,
              className:'comment-section',
            classt:'comment-text'}))
       }
    render() {
        return (
            <div className="post">
                <Sidebar />
                <Online />
              <div className="add-com">
            <Addicon/>
         </div>
                <div className="post-per">
                    {this.state.a3.map(now =>
                    <>
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
                                <span className="postLikeCounter"> {this.state.count}likes</span>

                            </div>
                            <hr />
                            <div className="li-co-sh">
                                
                                <div className="comment-bo"onClick={this.commentController}>
                                    {this.state.commentCounter}Comment
                                </div>
                            
                            </div>
         
                        </div>
                               <div className={this.state.className}>
                        <textarea className={this.state.classt}></textarea>
                               <button className='btn-cmt'  onClick={this.commentSubmitController} >Comment</button>  
                               </div></>
                    )}
                </div>
            </div>

        );
    }
}
export default Posts;