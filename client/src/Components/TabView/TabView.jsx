import React, { useState } from 'react';
import ChatState from '../../AppState/DataProvider';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBIcon,
    MDBBadge
} from 'mdb-react-ui-kit';
import {Menu,MenuButton,MenuDivider,MenuItem,MenuList,Button,Avatar} from '@chakra-ui/core'
import UsersList from '../header/UsersList';
import { Link } from 'react-router-dom'
import './TabView.css';
import ChatContainer from '../container/ChatContainer';
import ProfileModal from '../Modals/ProfileModal';
import Posts from '../../Pages/post/post';
import Blog from '../../Pages/blog/blog';
import Conversation from '../conversations/Conversation';
import { Bl } from '../../blog';
export default function TabView() {
    // const {user} = ChatState() 
    const raw = JSON.parse(localStorage.getItem('art-user'))
    const [Modal, setModal] = useState(false);
    const modalHandler = () => {
        Modal ? setModal(false) : setModal(true);
    }
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };
   const logoutHandler = () => {
        localStorage.removeItem('art-user');
        window.location.href='/login'
    }
    return (
        <>
            <div className="fixed">
                <MDBTabs justify>
                    <MDBTabsItem className="nav-tabs" >
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            <MDBIcon fas icon='comment-alt' /> Chat
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className="nav-tabs">
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            <MDBIcon fas icon='rss-square' /> Feeds
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className="nav-tabs">
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            <MDBIcon fas icon='blog' />Blog
                        </MDBTabsLink>
                    </MDBTabsItem>
         
                    <Menu>
                        <MenuButton as={Button} >
                            <Avatar size='sm' src={raw.other.avatarImage} name={raw.other.name} cursor='pointer'/>
                        </MenuButton>
                          <MenuList>
                                <MenuItem>
                                <ProfileModal></ProfileModal>
                                </MenuItem>
                                <MenuDivider/>
                                <MenuItem onClick={logoutHandler}>
                                LogOut
                                </MenuItem>
                        </MenuList>
                    </Menu>
                </MDBTabs>
                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}><Conversation /></MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}><Posts /></MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab3'}><Blog /></MDBTabsPane>
                </MDBTabsContent>
            </div>
        </>
    );
}