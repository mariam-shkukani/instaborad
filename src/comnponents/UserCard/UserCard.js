import React, { useState } from 'react';
import './UserCard.css';

function UserCard({ user }) {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  const name = `${user.name.first} ${user.name.last}`;
  const picture = user.picture?.large || user.picture?.medium || user.picture?.thumbnail;
  const email = user.email;

  return (
    <div className="usercard">
      <img className="usercard__img" src={picture} alt={name} />
      <div className="usercard__body">
        <h3 className="usercard__name">{name}</h3>
        {showEmail && <p className="usercard__email">{email}</p>}
        <div className="usercard__actions">
          <button className="btn" onClick={() => setLikes(l => l + 1)}>
            ❤️ Like {likes}
          </button>
          <button className="btn btn--alt" onClick={() => setShowEmail(s => !s)}>
            {showEmail ? 'Hide Email' : 'View Email'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
