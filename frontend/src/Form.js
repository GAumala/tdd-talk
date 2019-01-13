import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { 
      errorMsg, 
      email, 
      name, 
      onSubmit 
    } = this.props;
    
    return (
      <div>
        <div>name:</div>
        <div>
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={this.handleInputChanged("name")}/>
        </div>
        <div>email:</div>
        <div>
          <input 
            type="text" 
            name="email" 
            value={email} 
            onChange={this.handleInputChanged("email")}/>
        </div>
        <div>
          <input type="submit" value="Submit" onClick={onSubmit} />
        </div>
        <span style={{color: '#FF0000'}}>
          {errorMsg}
        </span>
      </div>
    )
  }

  handleInputChanged = (key) =>  {
    const { onInputChanged } = this.props;
    return event => {
      onInputChanged(key, event.target.value)
    }
  }
}

export default Form;
