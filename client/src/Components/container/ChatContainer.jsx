import React, { useState } from 'react';
import Conversation from '../conversations/Conversation';
import './ChatContainer.css';
import { Box, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/core'
import { MDBIcon, MDBInputGroup, MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';
import { Avatar, Input, InputGroup, InputRightElement } from '@chakra-ui/core';
import { ChatState } from '../../AppState/DataProvider';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export default function ChatContainer() {
    // const { user } = ChatState();
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const handleClick = (e) => {
        setName(e.target.innerText);
    }

    const searchHandler = async (e) => {
        e.preventDefault()
        setLoading(true);
        const { token } = JSON.parse(localStorage.getItem('art-user'));
        const keyword = e.target.value;
        console.log(token)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            }
        }
        try {
            const { data } = await axios.get(`http://localhost:3030/user?search=${keyword}`, config);
            console.log(data)
            setResult(data);
            setLoading(false)
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }
    return (

        <div className=" scrollable row">
            <div className="column-left" >

                <Box >

                    <InputGroup margin={2} className='mb-3' noBorder >
                        <InputRightElement
                            pointerEvents='none'
                            children={<MDBIcon icon='search' color='gray.300' />} />
                        <Input onChange={searchHandler} type='search' placeholder='Search' size='lg' variant='filled' />
                    </InputGroup>
                    {loading && <Stack>
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                        <Skeleton height='40px' />
                    </Stack>}
                    <MDBListGroupItem onClick={handleClick} className='d-flex justify-content-between align-items-center pointer'>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        Abel Wondwossen
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem>
                </Box>

            </div>
            <div className="column-right">
                {name && <Conversation name={name} />}
            </div>

            <ToastContainer />

        </div>

    );
}