import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const ChatContext = createContext();
const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();
        let navigate =useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('art-user'));
        if (!userInfo) {
            navigate('/login');
        }
        setUser(userInfo)

    }, [navigate])
    return (
        < ChatContext.Provider value={{ user, setUser }}>
            {children}
        </ChatContext.Provider>
    );

}

export const ChatState = () => useContext(ChatContext)
export default ChatProvider;