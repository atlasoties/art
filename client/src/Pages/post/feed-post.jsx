import './feed-post.css'
import React from 'react'
class Feed extends React.Component{
    render()
    {
        return(
            <div className="feed-class">
                <div className="feed-input">
                <h3>Choose your art:</h3>
                    <input type="file"id="1" name="feeds"accept="image/png, image/jpeg"/>
                    <h3>Add your discription:</h3>      <input type='text'id='2' name='feed-discription' /><br/> <br/>
                    <button type='submit'>submit</button>
                      </div>
            </div>
        );
    }
}
export default Feed;