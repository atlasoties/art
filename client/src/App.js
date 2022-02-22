import React from'react';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <Router> 
        <Routes> 
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
        </Routes>
      </Router>
      );
  }
}


export default App;
