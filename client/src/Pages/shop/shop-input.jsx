import './shop-input.css'
import React from "react";
class Shin extends React.Component{
    render(){
        return(
            <div className="shin-class">
            <div className="shin-input">
            <h3>Choose your art:</h3>
                <input type="file"id="1" name="blin"accept="image/png, image/jpeg"/>
                <h3>Art Name:</h3>      <input type='text'id='2' cols='5' row='5' name='blog-content' /><br/> <br/>
                <h3>Artist Name:</h3>      <input type='text'id='2' cols='5' row='5' name='blog-content' /><br/> <br/>
                <button type='submit'>submit</button>
                  </div>
        </div>
        );
    }
}
export default Shin;