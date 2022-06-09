import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("art-user"));
    setUser(userInfo);
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};
export default ChatProvider;
