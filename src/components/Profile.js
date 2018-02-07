import React from 'react';

const Profile = ({ user }) => (
  <div className="profile">
    <div className="avatar">
      <img src={user.avatar_url} height={150} />
    </div>
    <div className="data">
      <p>{user.name}</p>
    </div>
  </div>
)

export default Profile