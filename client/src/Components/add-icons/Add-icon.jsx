import React from "react";
import './Add-icon.css'
import { Link } from 'react-router-dom';
import blogf from '../../Asset/img/blog_feed.png'
import pro from '../../Asset/img/prototype.png'
import ar from '../../Asset/img/starry-night.png'
import plus from '../../Asset/img/plus.png'
class Addicon extends React.Component{

    constructor(){
        super();
        this.state={
            className:'plus',
        }
    }
    AddiconController=()=>{
       if(this.state.className==='plus'){ this.setState({
            className:'plus-change',
    })}
    else if(this.state.className==='plus-change'){
        this.setState({
            className:'plus',
        })
    }
}
render(){
   
    return(
        <div className="add-icon-class">
        <img title="Add art" className={this.state.className} src={ar} alt="" /> 
        <img title="Add blog" className={this.state.className} src={blogf} alt="" /> 
        <img title="Add proudct" className={this.state.className} src={pro} alt="" /> 
        <img onClick={this.AddiconController} className="plus1" src={plus} alt="" /> 
        </div>
        
    );
}
}
export default Addicon;