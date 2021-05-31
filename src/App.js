import React, { Component } from 'react';
import UserList from './shared/organisms/UserList'
import CreateNewUser from './shared/organisms/CreateNewUser';
import userData from './services/userData';
import createUser from './services/createUser';
import Alert from '@material-ui/lab/Alert';

const randomID = (limit) => {
  return Math.floor(Math.random(limit) * Math.floor(limit));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [],
      serverError: false,
    };
    this.handleCreateUser = this.handleCreateUser.bind(this)
  }

  async componentDidMount() {
    try {
      const users = await userData();
      this.setState({ users });
    } catch(err) {
      this.setState({ 
        serverError: true,
      });
    }
  }

  async handleCreateUser(payload) {
    try {
      const user = await createUser({
        name: payload.name,
        job: payload.job,
      });
      const [fname, lname] = user.name.split(' ');
      const userFormat = {
        avatar: `https://picsum.photos/id/${randomID(100)}/200/200`,
        first_name: fname,
        last_name: lname,
        id: user.id,
        job: user.job,
      }
      this.setState({ 
        users: [...this.state.users, userFormat],
      });
    } catch(err) {
      this.setState({ 
        serverError: true,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1> User List </h1>
        <UserList 
          usersData={this.state.users}
        />
        <CreateNewUser 
          handleCreateUser={this.handleCreateUser}
        />
        {
          this.state.serverError 
            && <Alert severity="error"> oops, there was an error on our side, please try again later! </Alert>
        }
      </div>
    );
  }
};

export default App;
