import React from 'react';
//import { Image } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import about_me from './banners/about_me.png';
import portfolio from './banners/portfolio.png';
import resume from './banners/resume.png';
import thoughts from './banners/thoughts.png';
import main_page from './banners/main_page.png';
import bits from './banners/bits.png';
import axios from 'axios';

const img_map = {
    'about_me': about_me,
    'portfolio': portfolio,
    'resume': resume,
    'thoughts': thoughts,
    'main_page': main_page,
    'bits': bits
};

class Header extends React.Component {

    constructor(props) {
        super();
        this.state = {
            img_loaded: false,
        }
    }

    render() {
      return ( 
            <div>

            <img src={img_map[this.props.banner]} width='100%' max-height='20%'   /> 
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <LinkContainer to={'/'}>  
                            <Navbar.Brand>Research</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to={'/'}>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                { sessionStorage.getItem('auth') == 'true' ?                                 
                                    <LinkContainer to={'/survey'}>
                                        <Nav.Link>Survey</Nav.Link>
                                    </LinkContainer> : '' }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
      );
    }
  }
  
  export default Header;
  