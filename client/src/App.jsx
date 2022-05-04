import React from'react';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
<<<<<<< HEAD:client/src/App.js
import Chat from './Pages/Chat';
import Posts from './Pages/post/post';
import Event from './Pages/Event/Event';
import Blog from './Pages/blog/blog';
import Shop from './Pages/shop/shop';
import Notifi from './Pages/notification/notification';
import Feed from './Pages/post/feed-post';
import Evin from './Pages/Event/event-input';
import Blin from './Pages/blog/blog-input';
import Shin from './Pages/shop/shop-input';
import Blon from './Pages/blog/blog-onclick';
=======
import Features from './Components/Features';

>>>>>>> f273282ee6c75f8e4ef9f05ab16c35e55cec95cc:client/src/App.jsx
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <Router> 
        <Routes> 
          <Route exact path='/' element={< Features />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/chat' element={< Chat />}></Route>
          <Route exact path='/feeds' element={< Posts />}></Route>
          <Route exact path='/posts' element={< Posts />}></Route>
          <Route exact path='/event' element={< Event />}></Route>
          <Route exact path='/blogs' element={< Blog />}></Route>
          <Route exact path='/shop' element={< Shop />}></Route>
          <Route exact path='/notification' element={< Notifi />}></Route>
          <Route exact path='/artupload' element={< Feed/>}></Route>
          <Route exact path='/eventupload' element={< Evin/>}></Route>
          <Route exact path='/blogupload' element={< Blin/>}></Route>
          <Route exact path='/artsupload' element={< Shin/>}></Route>
          <Route exact path='/blogload' element={< Blon/>}></Route>
        </Routes>
      </Router>
      );
  }
}


export default App;
