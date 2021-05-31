import React, { Component } from 'react';
import CreateUserForm from '../molecules/CreateUserForm';

class CreateUser extends Component {
  render() {
    return (
      <React.Fragment>
        <h2> Create a new user </h2>
        <CreateUserForm 
          handleCreateUser={this.props.handleCreateUser}
        />
      </React.Fragment>
    )
  }
}

export default CreateUser;
