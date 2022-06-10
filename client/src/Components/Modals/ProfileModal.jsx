import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
export default function ProfileModal() {
    const [basicModal, setBasicModal] = useState(false);
    const logoutHandler = () => {
        localStorage.removeItem('art-user');
        window.location.href='/login'
    }
    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <>
            <MDBBtn onClick={toggleShow}>Logout</MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>Modal body text goes here.</MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Cancel
                            </MDBBtn>
                            <MDBBtn onClick={logoutHandler}>Yes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}