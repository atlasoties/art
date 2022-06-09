import React, { useState } from 'react';
import './Conversation.css';
import { MDBDropdown, MDBBtn, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import LogOutModal from '../Modals/LogoutModal';
import ChatMessages from '../ChatMessage/ChatMessages';
import img1 from '../../Asset/img/merke.jpg'
function Conversation() {
    const [userName, setUserName] = useState('');
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const nameTransformer = (e) => {
        e.preventDefault();
        let clickText = e.target.innerText.split(' ');
        if (!clickText.includes('offline')  || !clickText.includes('online')) {
            setUserName(clickText[0]);
            console.log(clickText.includes('offline'))
        }
    }
    return (<>
        <div className='chat-contain'>
            <aside>
                <header>
                    <input type="text" placeholder="search" />
                </header>
                <ul>
                    <li onClick={nameTransformer}>
                        <img src={img1} alt="" />
                        <div>
                            <h2>Merkeb vshd</h2>
                            <h3>
                                <span className="status orange"></span>
                                offline
                            </h3>
                        </div>
                    </li>
                    <li onClick={nameTransformer}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status green"></span>
                                online
                            </h3>
                        </div>
                    </li>
                    <li>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status orange"></span>
                                offline
                            </h3>
                        </div>
                    </li>
                    <li>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_04.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status green"></span>
                                online
                            </h3>
                        </div>
                    </li>
                    <li>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_05.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status orange"></span>
                                offline
                            </h3>
                        </div>
                    </li>
                    <li>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_06.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status green"></span>
                                online
                            </h3>
                        </div>
                    </li>
                    <li>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status green"></span>
                                online
                            </h3>
                        </div>
                    </li>
                    <li>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status green"></span>
                                online
                            </h3>
                        </div>
                    </li>
                    <li>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status green"></span>
                                online
                            </h3>
                        </div>
                    </li>
                    <li>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg" alt="" />
                        <div>
                            <h2>Prénom Nom</h2>
                            <h3>
                                <span className="status orange"></span>
                                offline
                            </h3>
                        </div>
                    </li>
                </ul>
            </aside>

            {userName && <ChatMessages name={userName} />}
        </div>

    </>
    );
}
export default Conversation;