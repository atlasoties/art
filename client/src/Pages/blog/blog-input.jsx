import './blog-input.css';
import React from "react";
class Blin extends React.Component
{
    render(){
        return(
            <div className="blin-class">
            <div className="blin-input">
            <h3>Choose your blog picture:</h3>
                <input type="file"id="1" name="blin"accept="image/png, image/jpeg"/>
                <h3>Add your blog:</h3>      <input type='text'id='2' cols='5' row='5' name='blog-content' /><br/> <br/>
                <button type='submit'>submit</button>
                  </div>
        </div>
        );
    }
}
export default Blin;