import React, { Component } from 'react';
import UserList from './shared/molecules/UserList'
import userData from './services/userData'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    (async () => {
      const users = await userData();
      this.setState({ users });
    })();
  }

  render() {
    return (
      <div className="App">
        <UserList 
          usersData={this.state.users}
        />
      </div>
    );
  }
};

export default App;
