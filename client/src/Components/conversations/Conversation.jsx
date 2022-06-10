import {ChatState} from '../../AppState/DataProvider'
import React, { useState,useEffect } from 'react';
import './Conversation.css';
import { MDBDropdown, MDBBtn, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBIcon } from 'mdb-react-ui-kit';
import { Link,useNavigate } from 'react-router-dom';
import LogOutModal from '../Modals/ProfileModal';
import ChatMessages from '../ChatMessage/ChatMessages';
import{Avatar,Box,Tooltip,Stack,Skeleton} from '@chakra-ui/core'
import img1 from '../../Asset/img/merke.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
function Conversation() {
    const {user,setUser} = ChatState();
    let [friendsList,setFriendsList] = useState([]);
    let navigate =useNavigate();
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState({});
    const [maintag, setMaintag]=useState('main');
    const [asidetag,setAsidetag ]=useState('aside');
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchFriends = async () =>{
         try{
        const {token} = user || JSON.parse(localStorage.getItem('art-user'));
            if(!token){
                window.location.href ='/login';
            }
        const config = {
            headers:{
                'Content-Type':'application/json',
                authorization:`Bearer ${token}`
            }
        }
      
        const {data} = await axios.get('http://localhost:3030/user/getfriends',config);
        setFriendsList([...data])
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
    useEffect(()=>{
        fetchFriends();

    },[]) 
    const backController = () =>{
        setMaintag('main');
        setAsidetag('aside');
    }

    const nameTransformer = (e) => {
        e.preventDefault();
        console.log(e.target.firstChild.innerText)
        const lop = JSON.stringify(e.target.firstChild.innerText)
        setUserId({lop});
        let clickText = e.target.innerText.split(' ');
        if (clickText.length !== 0) {
            setUserName(clickText[0]);
            setMaintag('cmain');
            setAsidetag('caside');
        }
    }
    return (<>
        <div className='chat-contain'>
            <aside className={asidetag} >
                <header>
                <Tooltip label='Search Users' color='white' hasArrow placement='bottom-end'>
                    <input type="text" placeholder="search" />
                    
                </Tooltip>
                </header>
                <ul>{
                    friendsList && friendsList.map((friend,index)=>(
                        <li key={friend._id} onClick={nameTransformer}>
                        <p style={{visibility:'hidden',display:'none'}}>{friend._id}</p>
                        <Avatar className='beu' bg='teal.500' name={friend.name} src={friend.avatarImage}  />
                        <div>
                            <h2>{friend.name}</h2>
                        </div>
                    </li>
                       ) ) }
                   
                </ul>
            </aside>
            <main className={maintag}>
                <ic className="arrow-icon">
               < MDBIcon onClick={backController} fas color='primary' icon='arrow-left' size='3x' />
                </ic>
            {userName && <ChatMessages name={userName} id={userId} />}
            </main>
            <ToastContainer/>
        </div>

    </>
    );
}
export default Conversation;