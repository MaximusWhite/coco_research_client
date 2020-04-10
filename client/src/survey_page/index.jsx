import React from 'react';
import { Navbar, Form, Button, Nav, NavDropdown, FormControl, Image, Col, Container, Row, Modal} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import Header from '../common/header';
import axios from 'axios';
import $ from 'jquery';

class SurveyPage extends React.Component {
    constructor(props) {
        super();
        // axios.get('/api/draw_caption/mikhail', {
        //   params: {
        //     user: 'mikhail'
        //   }
        // }).then(res => {
        //   console.log(res.data);
        // }).catch(err => {
        //   console.log(err.message);
        // });
        this.state = {
          show_modal: false,
          modal_type: 'log',
          modal_msg: 'NULL'
        }
    }

    render() {
      return (
        <div> 
          <Header banner={'main_page'} />
          <Container style={{ fontSize: "22pt" }} className="border mt-3">
            <Row className="text-center mt-3">
              <Col>Here's the survey</Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
  
  export default SurveyPage;
  