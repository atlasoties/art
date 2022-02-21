import React from'react';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <Router> 
      <Routes> 
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
      </Routes>
      </Router>
      );
  }
}


export default App;
