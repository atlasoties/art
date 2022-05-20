import React from "react";
import { Link } from 'react-router-dom';
import './chat-header.css'
import profile1 from '../../Asset/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import blog from '../../Asset/img/blog.png'
import eventicon from '../../Asset/img/event.png'
import feedicon from '../../Asset/img/feed.png';
import shopicon from '../../Asset/img/shop.png'
class Header1 extends React.Component
{
    render()
    {
        return(
            <div className="header-list">
                     <h3>pan art</h3>
                     <div className="chat-profile">
                            <img className='chat-profile-img'src={profile1}alt='user profile' />
                            <hr/>
                         </div>
                         <div className="feeds-icon">
                         <Link to='/feeds'><img className='feed-img' title='feeds'src={feedicon} alt="" /></Link>
                         <Link to='/blog'><img className='feed-img' title='blog'src={blog} alt="" /></Link>
                         <Link to='/events'><img className='feed-img' title='events'src={eventicon} alt="" /></Link>
                         <Link to='/shop'><img className='feed-img' title='shop'src={shopicon} alt="" /></Link>
                         </div>
                
            </div>
        )
    }
}
export default Header1;