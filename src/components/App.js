import React, { Component } from 'react'
import Search from './Search'
import UserList from './UserList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userList: []
    }
  }

  handleUser = (user) => {
    this.setState({
      userList: [...this.state.userList, user]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search handleUser={this.handleUser} />
        <UserList userList={this.state.userList} />
      </div>
    );
  }
}

export default App;
