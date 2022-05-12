import React from 'react';
import "./Chat.css";
import Header1 from '../Components/header/chat-header';
import profile1 from './../Asset/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import Cuser from '../Components/active-chat-users/active-chat-users';
class Chat extends React.Component {
    render() {
        return (

            <div className="chat-first">

                <div className="chat-first-items">
                    <h3>pan art</h3>
                    <div className="chat-profile">
                        <img className='chat-profile-img' src={profile1} alt='user profile' />
                    </div>
                </div>
                <div className="chat-nav">
                    <Header1 />
                </div>
                <div className='chat-view'>
                    <div className="writing-chat">
                        <input type="text" />
                    </div>
                </div>
                <div className="chat-second-items">
                    <input className='search-user' type="search" placeholder='search user' />
                    <Cuser />
                </div>
            </div>

        );
    }

}
export default Chat;