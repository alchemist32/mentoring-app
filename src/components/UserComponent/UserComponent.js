import React, { useContext } from 'react';
import './UserComponent.css';
import Context from '../../Context';

function UserComponent({ user }) {
  const { themeDark } = useContext(Context);
  return (
    <div
      className="user-card"
      style={
        themeDark
          ? { backgroundColor: '#2b2b2b' }
          : { backgroundColor: '#ffffff' }
      }
    >
      <img src={user.avatar} alt="User picture" className="user-img" />
      <h5 style={themeDark ? { color: '#fff' } : { color: '#000' }}>
        {user.first_name} {user.last_name}
      </h5>
    </div>
  );
}

export default UserComponent;
