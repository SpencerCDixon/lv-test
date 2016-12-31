import React, { Component, PropTypes } from 'react';
import Input from '../Input';
import Button from '../Button';
import fetch from 'isomorphic-fetch';
import { Flex, Box } from 'reflexbox';

class SignUpForm extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
  }

  handleFNameUpdate = (e) => {
    this.setState({fname: e.target.value})
  }
  handleLNameUpdate = (e) => {
    this.setState({lname: e.target.value})
  }
  handleEmailUpdate = (e) => {
    this.setState({email: e.target.value})
  }
  handleSubmit = () => {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/vnd.learningventures.io; version=1',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        user: {
          first_name: this.state.fname,
          last_name: this.state.lname,
          email: this.state.email,
          password: 'password',
        }
      }),
    }).then(response => {
      return response.json();
    }).then(json => {
      console.log({json});
    });
  }

  render() {
    return (
      <Flex flexColumn>
        <Box my={1} style={{width: '100%'}}>
          <Input 
            value={this.state.fname}
            placeholder="First Name" 
            type="text" 
            onChange={this.handleFNameUpdate} 
          />
        </Box>

        <Box my={1}>
          <Input 
            value={this.state.lname}
            placeholder="Last Name" 
            type="text" 
            onChange={this.handleLNameUpdate} 
          />
        </Box>

        <Box my={1}>
          <Input 
            value={this.state.email}
            placeholder="Email" 
            type="text" 
            onChange={this.handleEmailUpdate} 
          />
        </Box>

        <Box my={1}>
          <Button onClick={this.handleSubmit}>
            Become A Better Learner
          </Button>
        </Box>
      </Flex>
    );
  }
}

export default SignUpForm;
