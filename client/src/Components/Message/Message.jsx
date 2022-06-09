import React, { useEffect } from 'react';
import './Message.css'
import pic1 from '../../Asset/img/merke.jpg'
import pic2 from '../../Asset/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import { Box, Avatar, Text } from "@chakra-ui/core";
export default function Message() {
  // useEffect(() => {
  //   document.title = "chat";
  // }, [])
  return (<>
    {/* <Box bg='whitesmoke' w="100%" h="100%" overflow='hidden'>

      <div className="sender-box">
        <Box shadow='dark-lg' bg='RGBA(255, 255, 255, 0.92)' margin={3} borderRadius='lg' w='50%' p={2}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Text color='black' noOfLines={1} textAlign='center' fontSize='xl'>Hello. How are you today?</Text>
          <span className="time-right">11:00</span>
        </Box>
      </div>

      <div className="receiver-box">

        <Box shadow='lg' bg='#2A4365' margin={3} borderRadius='lg' w='50%' p={2} color='white'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Text color='white' noOfLines={1} textAlign='center' fontSize='xl'>Hello. How are you today?</Text>
          <span className="time-right">11:00</span>
        </Box>
      </div>

    </Box> */}
    <ul id="chat">
      <li className="you">
        <div className="entete">
          <span className="status green"></span>
          <h2>Vincent</h2>
          <h3>10:12AM, Today</h3>
        </div>
        <div className="triangle"></div>
        <div className="message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </li>
      <li className="me">
        <div className="entete">
          <h3>10:12AM, Today</h3>
          <h2>Vincent</h2>
          <span className="status blue"></span>
        </div>
        <div className="triangle"></div>
        <div className="message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </li>
      <li className="me">
        <div className="entete">
          <h3>10:12AM, Today</h3>
          <h2>Vincent</h2>
          <span className="status blue"></span>
        </div>
        <div className="triangle"></div>
        <div className="message">
          OK
        </div>
      </li>
      <li className="you">
        <div className="entete">
          <span className="status green"></span>
          <h2>Vincent</h2>
          <h3>10:12AM, Today</h3>
        </div>
        <div className="triangle"></div>
        <div className="message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </li>
      <li className="me">
        <div className="entete">
          <h3>10:12AM, Today</h3>
          <h2>Vincent</h2>
          <span className="status blue"></span>
        </div>
        <div className="triangle"></div>
        <div className="message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </li>
      <li className="me">
        <div className="entete">
          <h3>10:12AM, Today</h3>
          <h2>Vincent</h2>
          <span className="status blue"></span>
        </div>
        <div className="triangle"></div>
        <div className="message">
          OK
        </div>
      </li>
    </ul>


  </>
  );
}