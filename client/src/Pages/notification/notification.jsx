import './notification.css';
import { Not } from '../../not';
import React from 'react';
import Topbar from '../../Components/topbar/Topbar';
import Sidebar from '../../Components/sidebar/sidebar';
import Online from '../../Components/online/Online';
class Notifi extends React.Component{
    constructor(){
        super()
        this.state={
            Not
        }
    }
    render(){
        return(
<div className="notifi-class">
        <Topbar/>
        <Sidebar/>
        <Online/>
        <h1>Notifications</h1>
        <div className="notif-card">
            {
                this.state.Not.map(no=>
                  <div className="notif-elements">
                      {no.mess}
                      <hr/>
                  </div>      

                )
            }
        </div>
    </div>

        );
    }}
    export default Notifi;