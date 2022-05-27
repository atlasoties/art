import './feed-post.css'
import React from 'react'
class Feed extends React.Component{
    render()
    {
        return(
            <div className="feed-class">
                <div className="feed-input">
                    <h1><strong> Share us </strong>your creative art work</h1>
                <div className="add-disc">
                   <div>Add your discription here</div> 
                    <textarea className='art-disc' name="art-disc" id="" cols="60" rows="3"></textarea>
                </div>
                <input type="file" name="file" id="file" className="myclass" />
<label for="file">Choose a file</label>
            </div>
            </div>
        );
    }
}
export default Feed;