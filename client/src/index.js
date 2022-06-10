import React from 'react';
import ChatProvider from './AppState/DataProvider';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@chakra-ui/core";
ReactDOM.render(
    <BrowserRouter>
        <ChatProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ChatProvider>
    </BrowserRouter>
    , document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results ( for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
