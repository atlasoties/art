import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBIcon,
    MDBBadge
} from 'mdb-react-ui-kit';
import UsersList from '../header/UsersList';
import { Link } from 'react-router-dom'
import './TabView.css';
import ChatContainer from '../container/ChatContainer';
import LogOutModal from '../Modals/LogoutModal';
import Posts from '../../Pages/post/post';
import Conversation from '../conversations/Conversation';
export default function TabView() {
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
                            Tab 3
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBIcon fas icon="sign-in-alt" size='3x' />
                    <Link to='/notifications'>
                        <MDBIcon fas icon='bell' size='3x' />
                        <MDBBadge color='danger' notification pill>
                            999+
                        </MDBBadge>
                    </Link>
                    {/* <MDBIcon className="icon-color" fas icon="bell" size='3x' /> */}
                </MDBTabs>
                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}><Conversation /></MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}><Posts /></MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </>
    );
}