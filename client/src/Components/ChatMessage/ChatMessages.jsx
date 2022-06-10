import {ChatState} from '../../AppState/DataProvider'
import React, { useState,useEffect } from "react";
import './ChatMessages.css';
import { toast } from 'react-toastify';
import {FormControl} from '@chakra-ui/core'
import {isSameSender} from '../../miniUtilities'
import axios from 'axios';
import io from 'socket.io-client'
function ChatMessages({ name,id }) {
    const [text,setText] = useState();
    const [room,setRoom]=useState();
    const [socketConnected,setSocketConnected]=useState(false);
    const [messages,setMessages]=useState([]);
    const loggedUser = JSON.parse(localStorage.getItem('art-user'));
    const ENDPOINT = 'http://localhost:3030';
    var socket,selectedRoomCompare;

    useEffect(()=>{
        socket =io(ENDPOINT);
        socket.emit('setup',loggedUser.other)
        socket.on('connection',()=>setSocketConnected(true))
    },[])
     useEffect(()=>{
        accessChat();
        fetchMessages();
        selectedRoomCompare = room;
    },[room])
      useEffect(()=>{
   
        socket.on('message received',(newMessageReceived)=>{
            if(!selectedRoomCompare || selectedRoomCompare._id !== newMessageReceived.chat._id){
                //notify
            }else{
                setMessages(...messages,newMessageReceived)
            }
        })
    })
    const typingHandler = (e) =>{
        setText(e.target.value);
        console.log(e.target.value)
    }

    const accessChat = async () =>{
            try{
                //const userId = id;
                 const {token} =  JSON.parse(localStorage.getItem('art-user'));
                 console.log(token)
                if(!token){
                    window.location.href ='/login';
                }
                const config = {
                headers:{
                    'Content-Type':'application/json',
                    authorization:`Bearer ${token}`
                    }
                }
      
        const {data} = await axios.post('http://localhost:3030/chat',id,config);
        setRoom(data)
         console.log(room._id)
        }catch(err){
            toast.error(err.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
  
     const sendMessageHandler = async (e) =>{
        if(e.key === "Enter" && text){
            try{
                 const {token} =  JSON.parse(localStorage.getItem('art-user'));
                 console.log(token)
                if(!token){
                    window.location.href ='/login';
                }
                const config = {
                headers:{
                    'Content-Type':'application/json',
                    authorization:`Bearer ${token}`
                    }
                }
        setText("")
        const {data} = await axios.post('http://localhost:3030/message/send',{text,chatId:room._id},config);
        setMessages([...messages,data])
        socket.emit("message received",data)
        console.log(messages)

        }catch(err){
            toast.error('Error Occured', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        }
     }
    const fetchMessages = async() =>{
        if(!room._id) return;
        try{
                 const {token} =  JSON.parse(localStorage.getItem('art-user'));
                 console.log(token)
                if(!token){
                    window.location.href ='/login';
                }
                const config = {
                headers:{
                    authorization:`Bearer ${token}`
                    }
                }
             console.log(messages)
            const {data} = await axios.get(`http://localhost:3030/message/fetchmessages/${room._id}`,config);
            setMessages(data)
            socket.emit('join chat',room._id)
            }catch(err){
                toast.error('Error Occured', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
    } 

 
    return (
        <>
            <main>
                <header>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
                    <div >
                        <h2>Chat with {name}</h2>
                        <h3>already {messages.length} messages</h3>
                    </div>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" />
                </header>
                <ul id="chat">
                   { messages && messages.map((m,i) =>
                    <li className={m.sender._id === loggedUser.other._id?"me":"you"}>
                        <div className="entete">
                            <span className="status green"></span>
                            <h2>{name}</h2>
                            <h3>10:12AM, Today</h3>
                        </div>
                        <div className="triangle"></div>
                        <div className="message">
                            {m.text}
                        </div>
                    </li>) }
                    {/*<li className="me">
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
                    </li>*/}
                </ul>
                <footer>
                <FormControl onKeyDown={sendMessageHandler}>
                    <textarea value={text} onChange={typingHandler} placeholder="Type your message"></textarea>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
                    <a onClick={sendMessageHandler} href="#">Send</a>
                 </FormControl>
                </footer>
            </main>
        </>
    )
}

export default ChatMessages;