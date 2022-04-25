import React from "react";
import './chat-header.css'
class Header1 extends React.Component
{
    render()
    {
        return(
            <div className="header-list">
                <div className="home">Home</div>
                <div className="event">Event</div>
                <div className="blog">Blog</div>
                <div className="notification">Notification</div>
                
            </div>
        )
    }
}
export default Header1;