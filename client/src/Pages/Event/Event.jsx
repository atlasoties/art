import Sidebar from "../../Components/sidebar/sidebar";
import Topbar from "../../Components/topbar/Topbar";
import React from "react";
class Event extends React.Component
{
    render(){
        return(
            <div>
    <Topbar/>
    <Sidebar/>
    </div>
        );
    }
}

export default Event;