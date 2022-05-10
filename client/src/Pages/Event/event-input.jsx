import './event-input.css'
import React from 'react'
class Evin extends React.Component
{
  render(){
      return(
        <div className="Evin-class">
        <div className="Evin-input">
        <h3>Choose your event poster:</h3>
            <input type="file"id="1" name="evin"accept="image/png, image/jpeg"/>
            <h3>Add your discription:</h3>      <input type='text'id='2' name='evin-discription' /><br/> <br/>
            <h3>fill your location:</h3>      <input type='text'id='3' name='evin-location' /><br/> <br/>
            <h3>Choose date:</h3>      <input type='datetime-local'id='4' name='date' /><br/> <br/>
            <h3>Event Type:</h3>      <input type='text'id='5' name='feed-discription' /><br/> <br/>
            <button type='submit'>submit</button>
              </div>
    </div>
      );
  }
}
export default Evin; 