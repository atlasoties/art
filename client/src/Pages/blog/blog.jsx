import React from "react";
import './blog.css'
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/sidebar";
import Online from "../../Components/online/Online";
// import { onlineUsers } from "../../userdata";
import { Bl } from "../../blog";
// const a4 = Bl.map(t1 => ({...t1, ...onlineUsers.find(t2 => t2.id === t1.id)}))
class Blog extends React.Component
{    
    constructor(){
        super();
        this.state={
            Bl
        };
    }

    render()
    {
        return(
            <div className="Blog-class">
                 <Topbar/>
                <Sidebar/>
                <Online /> 
                <div className="blog-card">
                     {  this.state.Bl.map(blo=>
                     <div className="blog-element">
                  
                         <div className="blog-pic">
                             <img className="blog-img" src={blo.blogpic} alt={blo.name} />
                         </div>
               
                         <div className="blog-cont">
                             {blo.blog}
                         </div>
                    
                  </div> 
                     )     
          }
            </div>
            </div>
        );
    }
}
export default Blog;
