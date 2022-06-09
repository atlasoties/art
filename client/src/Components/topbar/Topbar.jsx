import "./topbar.css";
import React from "react";
import {
  MDBBtn,
  MDBTypography,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

class Topbar extends React.Component {
  render() {
    return (<header>
      <MDBNavbar expand='md' bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='info'>Search</MDBBtn>
          </form>
        </MDBContainer>
      </MDBNavbar>

      <div className='p-5 text-center'>
        <MDBTypography tag='h1'>Welcome To Your Life</MDBTypography>
        <MDBTypography tag='h2'>Pan Art will save Your Job, Join US</MDBTypography>
        <Link to='/login' >
          <MDBBtn rounded color='primary'>
            login
          </MDBBtn>
        </Link>
        <Link to='/register'>
          <MDBBtn rounded color='success'>
            Register
          </MDBBtn>
        </Link>
      </div>
    </header>
    );
  }
}
export default Topbar;