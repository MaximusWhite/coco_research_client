import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
import routes from './routes';

class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
    );
  }
}

export default App;
