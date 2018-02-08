import React from 'react'
import Profile from './Profile'

const UserList = ({ userList }) => (
  <div className="list">
    {userList.map((user, index) => <Profile key={`${user.id}-${index}`} user={user} />)}
  </div>
)

export default UserList