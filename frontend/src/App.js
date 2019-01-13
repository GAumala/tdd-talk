import React, { Component } from 'react';
import Form from './Form.js';
import Loading from './Loading.js';
import './App.css';

const updateInput = (key, value) => prevState => {
  return { ...prevState, [key]: value };
}

const submitForm = uploadFn => prevState => {
  if (!prevState.name)
    return { ...prevState, 
      submitting: false, 
      errorMsg: 'Nombre es requerido.' 
    }

  if (!prevState.email)
    return { ...prevState, 
      submitting: false,
      errorMsg: 'E-mail es requerido.' 
    }


  if (!prevState.submitting)
    uploadFn({ 
      name: prevState.name, 
      email: prevState.email 
    });
  return { ...prevState, submitting: true };
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

    if (submitting)
      return <Loading />

    return (
        <Form 
          name={name}
          email={email}
          errorMsg={errorMsg}
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
