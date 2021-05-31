import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CreateUserForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    job: '',
  }
  handleClick = () => {
    const fullname = `${this.state.firstName} ${this.state.lastName}`;
    const payload = {
      name: fullname,
      job: this.state.job,
    };
    this.props.handleCreateUser(payload);
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault(); 
        this.handleClick();
      }}>
        <TextField 
          name='firstName'
          required 
          variant='filled' 
          label='First Name'
          onChange={this.handleChange}
          value={this.state.firstName}
        />
        <TextField 
          name='lastName'
          variant='filled' 
          label='Last Name' 
          onChange={this.handleChange}
          value={this.state.lastName}
        />
        <TextField 
          name='job'
          required 
          variant='filled' 
          label='Job' 
          onChange={this.handleChange}
          value={this.state.job}
        />
        <Button  
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    )
  }
};

export default CreateUserForm;
