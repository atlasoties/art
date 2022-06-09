import React,{useEffect,useState} from 'react';
import ChakraTab from '../Components/ChakraTab/Chakratab';
import "./Chat.css";
import TabView from '../Components/TabView/TabView';
import { useNavigate } from "react-router-dom";

function Chat () {
    // const [user, setUser] = useState(null);
    // const navigate = useNavigate();
    // useEffect(() => {
    //   const userInfo = JSON.parse(localStorage.getItem("art-user"));
    //   setUser(userInfo);
    //   if (!userInfo) {
    //     navigate("/login");
    //   }
    // }, [navigate]);
        return (
            <div className="tab-container">
                <TabView />
                {/* <ChakraTab /> */}
            </div>
        );
    
}
export default Chat;