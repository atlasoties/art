import React from "react";
import './active-chat-user.css'
import { onlineUsers } from "../../userdata";

class Cuser extends React.Component
{
    constructor(props)
    {
        super();
        this.state={
          onlineUsers
        };
    }

    render()
    {
        return(
            <div className="chat-class">{
         this.state.onlineUsers.map(onlineUser=>
       
                 <div className="messages">
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
        );
    }
    
}
export default Cuser;