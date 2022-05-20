import './chat-view.css'
import React from 'react';
import { onlineUsers } from '../../userdata';
import file from '../../Asset/img/paperclip.png'
class ChatView extends React.Component{
      
render(){
    return(
        <div className="chat-view-class">
           
            <div className="chat-user-header">
               
                <div className="user-pic">
                    <img className='up' src={onlineUsers[0].uimg}alt={onlineUsers[0].name} />
                </div>
                <div className="user-name">
                    {onlineUsers[0].name}
                </div>
            </div>
            <div className="attach-file">
            <img className='file'src={file}
             alt="" />
            </div>
            <div className="input-value">
            <input className='textarea'type="text" />
            </div> 
            <div className="send-button">
                <button className='chat-send'>Send</button>
            </div>
        </div>
    );
}
}
export default ChatView;