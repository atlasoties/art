import React from'react';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import Posts from './Pages/post/post';
import Event from './Pages/Event/Event';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <Router> 
        <Routes> 
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/chat' element={< Chat />}></Route>
          <Route exact path='/feeds' element={< Posts />}></Route>
          <Route exact path='/posts' element={< Posts />}></Route>
          <Route exact path='/event' element={< Event />}></Route>
        </Routes>
      </Router>
      );
  }
}


export default App;
