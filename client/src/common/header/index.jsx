import React from 'react';
//import { Image } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import main from './banners/main.png';
import survey from './banners/survey.png';
import axios from 'axios';



const img_map = {
    'main': main,
    'survey': survey
};

class Header extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            img_loaded: false,
        }
    }

    logout() {
        sessionStorage.removeItem('auth');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('first_name');
    }

    render() {
      return ( 
            <div>

            {this.props.banner == 'survey' ? '' : <img src={main} width='100%' /> }
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <LinkContainer to={'/'}>  
                            <Navbar.Brand>{this.props.name == null ? 'Research' : 'Hi, ' + this.props.name}</Navbar.Brand>
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
                            { sessionStorage.getItem('auth') == 'true' ?
                                    <LinkContainer style={{ color: 'white' }} to={'/'}>
                                        <Nav.Link className="right"  onSelect={this.logout}>Log out</Nav.Link>
                                    </LinkContainer>
                                    : '' }
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
      );
    }
  }
  
  export default Header;
  