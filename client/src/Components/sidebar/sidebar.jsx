import React from "react";
import { Link } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="two-links">
        <div className="links">
          <div className="topbar-logo">
            <span className="logo">PAN-ART</span>
          </div>
          <div className="links-sidebar">
            <div className="feeds">
              <Link className="feeds-link" to='/feeds'>Feeds</Link>
            </div>
            <div className="Events">
              <Link className="Events-link" to='/event'>Events</Link>
            </div>
            <div className="blog">
              <Link className="Blogs-link" to='/blogs'>Blog</Link>
            </div>
            <div className="Chat-link">
              <Link className="Chat" to='/chat'>Chat</Link>
            </div>
            <div className="shop">
              <Link className="Shop-link" to='/shop'>Shop</Link>
            </div>
            <div className="Search">
              <Link className="Search-link" to='/search'>Search</Link>
            </div>
            <div className="notification">
              <Link className="Notifications-link" to='/notification'>Notification</Link>
            </div>
          </div>
        </div>
        <label id="hamburger-menu" for="hamburger-input">
          <nav id="sidebar-menu">
            <h3>Menu</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Store</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </label>
        <div class="overlay"></div>

      </div>
    );
  }
}
export default Sidebar;