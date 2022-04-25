import React from "react";
import { Link } from 'react-router-dom';
import './sidebar.css';
// import {
//     Chat,
//     Event,
//   } from "@material-ui/icons";
class Sidebar extends React.Component
{
    render()
    {
        return(
          <div className="links">
                <div className="topbar-logo">
                <span className="logo">PAN-ART</span>
            </div>
                    <div className="feeds">
                    <Link className="feeds-link" to='/feeds'>Feeds</Link>
                    </div>
                    <div className="Events">
                    <Link className="Events-link" to='/event'>Events</Link>
                    </div>
                    <div className="blog">Blog</div>
                    <div className="Chat-link">
                        <Link className="Chat" to='/chat'>Chat</Link>
                    </div>
                    <div className="shopping">Shopping</div>
                    <div className="Search">Search</div>
                    <div className="notification">Notification</div>
                </div>
        );
    }
}
export default  Sidebar;