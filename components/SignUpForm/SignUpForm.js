import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../Input';
import Button from '../Button';
import fetch from 'isomorphic-fetch';
import Api from '../../util/lvApi.js';
import { Flex, Box } from 'reflexbox';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: '', lname: '', email: '' };
    this.api = new Api();
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
    console.log('DISPATCHING');
    this.props.dispatch({type: 'CREATE'});
    // this.api.createUser({
      // firstName: this.state.fname,
      // lastName: this.state.lname,
      // email: this.state.email,
      // password: 'password',
    // })
    // .then(json => {
      // console.log({json});
      // this.setState({email: '', fname: '', lname: ''})
    // });
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

export default connect(state => state)(SignUpForm);
