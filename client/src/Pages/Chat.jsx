import React from 'react';
import "./Chat.css";
import TabView from '../Components/TabView/TabView';
class Chat extends React.Component {
    render() {
        return (
            <div className="tab-container">
                <TabView />
                {/* <ChakraTab /> */}
            </div>
        );
    }
}
export default Chat;