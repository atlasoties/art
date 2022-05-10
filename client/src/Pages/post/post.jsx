import React from 'react';
import './post.css'
import likePost from '../../Asset/img/back3.jpg';
import lovePost from '../../Asset/img/back2.jpg';
import { onlineUsers } from '../../userdata';
import { Po } from '../../posts';
import Sidebar from '../../Components/sidebar/sidebar';
import Topbar from '../../Components/topbar/Topbar';
import Online from '../../Components/online/Online';
const a3 = Po.map(t1 => ({ ...t1, ...onlineUsers.find(t2 => t2.id === t1.id) }))
class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            a3
        };

    }
    render() {
        return (
            <div className="post">

                <Sidebar />

                {/* <Topbar/> */}

                <Online />

                <div className="post-per">

                    {this.state.a3.map(now =>
                        <div className='posters-elements' >
                            <div className='post-info'>
                                <img className='post-user-profile' src={now.uimg} alt={now.name} />

                                <div className='post-user-name' >{now.name}</div>
                            </div>
                            <hr />
                            <div className='post-thought'>{now.thought}</div>
                            <img className='post-pic' src={now.pic} alt={now.thought} />
                            <div className="l-post">
                                <div className="li-post"> <img className='like-post' src={likePost} alt="like" /></div>
                                <div className="lo-post"> <img className='love-post' src={lovePost} alt="love" /></div>
                                <span className="postLikeCounter"> people like it</span>

                            </div>
                            <hr />
                            <div className="li-co-sh">
                                <div className="like-bo">
                                    Like
                                </div>
                                <div className="comment-bo">
                                    Comment
                                </div>
                                <div className="share-bo">
                                    Share
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}
export default Posts;