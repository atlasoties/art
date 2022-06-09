import React from "react";
import { Link } from 'react-router-dom';
import './UsersList.css'
 import { MDBListGroup, MDBListGroupItem, MDBBadge,MDBInputGroup,MDBIcon } from 'mdb-react-ui-kit';
import ChatContainer from "../container/ChatContainer";
class UsersList extends React.Component {
    constructor() {
        super();
        this.state = {
            activated: false,
            color: null,
        }
    }

    activate = () => {
        this.state.activated ? this.setState({ activated: false, color: null }) : this.setState({ activated: true, color: 'bg-dark-blue' });

        console.log(this.state.activated, this.state.color);
    }
    UserHeader = (e) => {
        console.log(e.target.innerText);

        return <ChatContainer name={e.target.innerText} />
    }
    render() {
        return (
            <div className="U-container">

                <MDBListGroup >
                    <MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem>
                    <MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem><MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem><MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem><MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem><MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem><MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem>
                    <MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem><MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem><MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem><MDBListGroupItem active onClick={this.UserHeader} id={this.state.activated ? this.state.color : null} className='d-flex justify-content-between align-items-center pointer'>
                        Cras justo odio
                        <MDBBadge color='danger' pill>14</MDBBadge>
                    </MDBListGroupItem>

                    <MDBListGroupItem active className='d-flex justify-content-between align-items-center pointer'>
                        Dapibus ac facilisis in
                        <MDBBadge color='danger' pill>2</MDBBadge>
                    </MDBListGroupItem>

                    <MDBListGroupItem active className='d-flex justify-content-between align-items-center pointer'>
                        Morbi leo risus
                        <MDBBadge color='danger' pill>1</MDBBadge>
                    </MDBListGroupItem>
                </MDBListGroup>
            </div>);
    }
}
export default UsersList;