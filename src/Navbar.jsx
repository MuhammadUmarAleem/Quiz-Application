import React, { useState } from 'react';
// import './addBooks.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  return (

    <div>
      
    <MDBNavbar expand='lg' dark bgColor='primary' style={{ position: 'fixed', width: '100%', zIndex: '999', marginTop:'0px',backgroundColor: "rgb(46, 46, 87)" }}>
    
    <MDBContainer fluid>
      <MDBNavbarBrand href='#' style={{color:'whiteSmoke', fontWeight:'bold', fontSize:'30px'}}> 
      <h4 className="display-10 fw-bold">
            <span style={{ whiteSpace: "nowrap"}}>
                Brain<span style={{ color:'#000080' }}>Blitz</span>
            </span>
            </h4>
      {/* <div class="loader">
      <span style={{fontWeight:'bold', fontSize:'30px'}}>W</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>o</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>r</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>d</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>W</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>a</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>n</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>d</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>e</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>r</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}> </span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>B</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>o</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>o</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>k</span>
      <span style={{fontWeight:'bold', fontSize:'30px'}}>s</span>
    </div> */}
      </MDBNavbarBrand>
      <MDBNavbarToggler
        type='button'
        data-target='#navbarColor02'
        aria-controls='navbarColor02'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
     
      <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
        <MDBNavbarItem>
            <MDBNavbarLink tag={Link} to='/Home' >Home</MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <MDBNavbarLink tag={Link} to='/Attemptquiz' >Progress</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink tag={Link} to='/' >LogOut</MDBNavbarLink>
          </MDBNavbarItem>

        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>

    </div>


  );
}