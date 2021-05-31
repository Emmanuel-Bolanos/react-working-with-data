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
      <form 
        onSubmit={e => {
          e.preventDefault(); 
          this.handleClick();
        }}
        className="inputForm"
      >
        <TextField 
          name='firstName'
          required 
          variant='filled' 
          label='First Name'
          onChange={this.handleChange}
          value={this.state.firstName}
          fullWidth
        />
        <TextField 
          name='lastName'
          variant='filled' 
          label='Last Name' 
          onChange={this.handleChange}
          value={this.state.lastName}
          fullWidth
        />
        <TextField 
          name='job'
          required 
          variant='filled' 
          label='Job' 
          onChange={this.handleChange}
          value={this.state.job}
          fullWidth
        />
        <Button  
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
        >
          Submit
        </Button>
      </form>
    )
  }
};

export default CreateUserForm;
