import React, { Component } from 'react'
import Profile from './Profile'

class UserList extends Component {
  render() {
    const { userList } = this.props;
    return (
      <div className="list">
        {userList.map(user => <Profile user={user} />)}
      </div>
    )
  }
}

export default UserList