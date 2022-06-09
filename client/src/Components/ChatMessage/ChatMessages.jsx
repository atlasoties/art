import React, { useState } from "react";
import './ChatMessages.css';
function ChatMessages({ name }) {

    const [messageToBeSent,setMessageToBeSent] = useState();
    const messageToBeSentHandler = (e) =>{
        setMessageToBeSent(e.target.value)
    }

    const sendMessage = (e) =>{
        e.preventDefault();
        
    }
    return (
        <>
            <main>
                <header>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
                    <div >
                        <h2>Chat with {name}</h2>
                        <h3>already 1902 messages</h3>
                    </div>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" />
                </header>
                <ul id="chat">
                    <li className="you">
                        <div className="entete">
                            <span className="status green"></span>
                            <h2>{name}</h2>
                            <h3>10:12AM, Today</h3>
                        </div>
                        <div className="triangle"></div>
                        <div className="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </li>
                    <li className="me">
                        <div className="entete">
                            <h3>10:12AM, Today</h3>
                            <h2>Vincent</h2>
                            <span className="status blue"></span>
                        </div>
                        <div className="triangle"></div>
                        <div className="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </li>
                    <li className="me">
                        <div className="entete">
                            <h3>10:12AM, Today</h3>
                            <h2>Vincent</h2>
                            <span className="status blue"></span>
                        </div>
                        <div className="triangle"></div>
                        <div className="message">
                            OK
                        </div>
                    </li>
                    <li className="you">
                        <div className="entete">
                            <span className="status green"></span>
                            <h2>Vincent</h2>
                            <h3>10:12AM, Today</h3>
                        </div>
                        <div className="triangle"></div>
                        <div className="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </li>
                    <li className="me">
                        <div className="entete">
                            <h3>10:12AM, Today</h3>
                            <h2>Vincent</h2>
                            <span className="status blue"></span>
                        </div>
                        <div className="triangle"></div>
                        <div className="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </li>
                    <li className="me">
                        <div className="entete">
                            <h3>10:12AM, Today</h3>
                            <h2>Vincent</h2>
                            <span className="status blue"></span>
                        </div>
                        <div className="triangle"></div>
                        <div className="message">
                            OK
                        </div>
                    </li>
                </ul>
                <footer>
                    <textarea onChange={messageToBeSentHandler} placeholder="Type your message"></textarea>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
                    <a onClick={sendMessage} href="#">Send</a>
                </footer>
            </main>
        </>
    )
}

export default ChatMessages;