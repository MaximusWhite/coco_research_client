import React from 'react';
import { Navbar, Form, Button, Nav, NavDropdown, FormControl, Image, Col, Container, Row, Modal, Spinner} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';
import './style.css';
import Header from '../common/header';
import axios from 'axios';
import $ from 'jquery';

class SurveyPage extends React.Component {
    constructor(props) {
      super();
      if (props.location.state) {
        this.state = {
          username: props.location.state.username,
          first_name: props.location.state.first_name,
          logged_in: props.location.state.logged_in,
        }
        sessionStorage.setItem('auth', 'true');
        sessionStorage.setItem('username', props.location.state.username);
        sessionStorage.setItem('first_name', props.location.state.first_name);
        console.log('Logged in directly');
      } else if (sessionStorage.getItem('auth') == 'true'){
        this.state = {
          username: sessionStorage.getItem('username'),
          first_name: sessionStorage.getItem('first_name'),
          logged_in: true,
        }
        console.log('Logged in via token');
      } else {
        console.log('Not logged in');
        this.state = {
          logged_in: false,
        }
      }
    }

    render() {
      return (
        <div> 
          <Header banner={'main_page'} />
          {this.state.logged_in == true ? (
            <Container style={{ fontSize: "22pt" }} className="border mt-3">
              <Row className="text-center mt-12">
                <Col>Hi, {this.state.first_name}! Here's the survey  <Spinner animation="grow" variant="primary" /> </Col>
              </Row>
              <Row className="text-center mt-10">
                <Col>Hi, {this.state.first_name}! Here's the survey</Col>
              </Row>
            </Container>
          )
          :
          <Container style={{ fontSize: "22pt" }} className="border mt-3">
            <Row className="text-center mt-3">
              <Col>You do not belong here. Go home.</Col>
            </Row>
          </Container>
          }
        </div>
      );
    }
  }
  
  export default SurveyPage;
  