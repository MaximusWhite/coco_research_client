import React from 'react';
import { Navbar, Form, Button, Nav, NavDropdown, FormControl, Image, Col, Container, Row, Modal} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import Header from '../common/header';
import axios from 'axios';
import $ from 'jquery';

class MainPage extends React.Component {
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

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    
    openModal(type_string) {
      this.setState({
        modal_msg: type_string == 'log'? 'Log in' : 'Request access to research',
        modal_type: type_string,
        show_modal: true
      });
    }

    closeModal() {
      this.setState({
        show_modal: false
      });
    }

    submitSignup(event) {
      event.preventDefault();
      axios.post('/api/access_req/', {
        email: document.getElementById("formBasicEmail").value
      }).then((res) => {
        if (res.data.status == 'OK') {
          console.log('ok');
          this.setState({
            show_modal: false

          });
        }
      }).catch((err) => {
        console.log(err.message);
      });
    }

    submitLogin(event) {
      event.preventDefault();
      axios.post('/api/login/', {
        email: document.getElementById("formBasicEmail").value,
        password: document.getElementById("formBasicPassword").value
      }).then((res) => {
        if (res.data.status == 'granted') {
          console.log('ok');
          this.setState({
            show_modal: false
          });
          this.props.history.push('/survey')
        }
      }).catch((err) => {
        console.log(err.message);
      });
    }

    loginModal() {
      return (
      <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={this.state.show_modal} onHide={this.closeModal}>
      <Modal.Header closeButton>
      <Modal.Title>{this.state.modal_msg}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={this.submitLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      </Modal>);
    }

    signupModal() {
      return (
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={this.state.show_modal} onHide={this.closeModal}>
        <Modal.Header closeButton>
        <Modal.Title>{this.state.modal_msg}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.submitSignup}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <b>Note: </b>Your request will be processed and you will be informed if you were selected to participate.
        </Modal.Footer>
        </Modal>);
    }

    render() {
      return (
        <div> 
          <Header banner={'main_page'} />
          <Container style={{ fontSize: "22pt" }} className="border mt-3">
            <Row className="text-center mt-3">
              <Col>Welcome to the research page!</Col>
            </Row>
            <Row className="text-center">
              <Col>Please log in using existing account or request access to the survey.</Col>
            </Row>
            <Row className="text-center my-3">
              <Col md={3}></Col>
              <Col>
                <Button variant="outline-primary" onClick={() => this.openModal('log')}>Log in</Button>
              </Col>
              <Col md={2}></Col>
              <Col>
                <Button variant="outline-primary" onClick={() => this.openModal('signup')}>Request access</Button>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
          { this.state.modal_type == 'log' ? this.loginModal() : this.signupModal() }
        </div>
      );
    }
  }
  
  export default MainPage;
  