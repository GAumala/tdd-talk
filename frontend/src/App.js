import React, { Component } from 'react';
import Form from './Form.js';
import Loading from './Loading.js';
import logo from './logo.svg';
import './App.css';

const updateInput = (key, value) => prevState => {
  return { ...prevState, [key]: value };
}

const submitForm = uploadFn => prevState => {
  return { ...prevState };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      errorMsg: "",
      submitting: false
    }
  }

  render() {
    const {
      name,
      email,
      errorMsg,
      submitting
    } = this.state;

    return (
        <Form 
          name={this.state.name}
          email={this.state.email}
          errorMsg={this.state.errorMsg}
          onInputChanged={this.handleInputChange}
          onSubmit={this.handleFormSubmit}/>)
  }

  handleInputChange = (key, value) => {
    this.setState(updateInput(key, value))
  }

  handleFormSubmit = () => {
    this.setState(submitForm(this.props.uploadFn))
  }
}

export default App;
