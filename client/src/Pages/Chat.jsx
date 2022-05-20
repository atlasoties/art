import React from 'react';
import "./Chat.css";
import arrow from '../Asset/img/arrow-left-solid.svg'
import Header1 from '../Components/header/chat-header';
import ChatView from '../Components/chat-view/chat-view';
import { onlineUsers } from '../userdata';
class Chat extends React.Component
{

    constructor()
    {
        super();
        this.state={
        onlineUsers,
        className:'chat-second-items',
        cN:'chat-view',
    }

    }
   Chathandller=()=>{
        this.setState({
            className:'chat-second-change',
            cN:'chat-view-change'
        })
    }
    Phonehandller=()=>{
        this.setState({
            className:'chat-second-items',
            cN:'chat-view',
        })
    }
        render(){
            return(
                <div className="chat-first">
                    <div className="chat-first-items">
                    <Header1/>
                         </div>
                         
                 <div className={this.state.className}>
                 <input className='search-user' type="search" placeholder='search user' />
            {
         this.state.onlineUsers.map(onlineUser=>
                 <div className="messages" onClick={this.Chathandller}>
                     <div className="onlineUserImg">
                    <img className="user-prof" src={onlineUser.uimg} alt={onlineUser.name} />
                    </div>
                <div className="chat-user-info">
                <div className="user-name">
                    {onlineUser.name}
                </div>
                <div className="user-message">
                    {onlineUser.message}
                    </div>
            </div>
            </div>
                    
             )}
                      </div>
                      
                      <div className={this.state.cN}>
                      <div className='arrow-class' >
                          <img onClick={this.Phonehandller} className='arrow' src={arrow} alt='' />
                </div>
                        <ChatView />
                    </div>
                    </div>
            );
        }

}
export default Chat;