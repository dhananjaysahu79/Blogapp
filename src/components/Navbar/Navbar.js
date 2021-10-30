import React, {useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import logo from '../../../src/logo.svg';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItems,
  NavLinks,
  MobileIcon
} from './Navbar.elements'



function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
     <>
       <Nav>
        <NavbarContainer>
          <NavLogo >
            <img src = {logo}></img>
          </NavLogo>
          <NavMenu click={click}>
            <NavItems>
              <NavLinks to = '/portfolio-website' onClick = {handleClick}>
                Home Feed
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/portfolio-website/about' onClick = {handleClick}>
               Pricing
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/portfolio-website/works' onClick = {handleClick}>
                About
              </NavLinks>
            </NavItems>

            <Button color = '#01C4A7' fontColor = '#fff'>
              Sign In
            </Button>

          </NavMenu>
          <MobileIcon onClick = {handleClick}>
            {click ? <FaTimes/> :<FaBars/>}
          </MobileIcon>
        </NavbarContainer>
       </Nav>
     </>
  );
}

export default Navbar;