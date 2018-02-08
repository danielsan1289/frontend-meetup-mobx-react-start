import React from 'react';

const Profile = ({ user }) => (
  <div className="profile">
    <div className="avatar">
      <img src={user.avatar_url} height={150} alt={`${user.login} profile`} />
    </div>
    <div className="data">
      <p className="name">{user.name}</p>
      <a className="login" href={user.html_url} target="_blank">{user.login}</a>
    </div>
  </div>
)

export default Profile