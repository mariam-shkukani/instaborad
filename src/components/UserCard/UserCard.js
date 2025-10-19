

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const id = user.login.uuid;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedUsers = JSON.parse(localStorage.getItem("likedUsers") || "[]");
    setLiked(likedUsers.some(u => u.login?.uuid === id));
  }, [id]);

  const toggleLike = () => {
    const likedUsers = JSON.parse(localStorage.getItem("likedUsers") || "[]");
    if (liked) {
      const updated = likedUsers.filter(u => u.login.uuid !== id);
      localStorage.setItem("likedUsers", JSON.stringify(updated));
      setLiked(false);
    } else {
      likedUsers.push(user);
      localStorage.setItem("likedUsers", JSON.stringify(likedUsers));
      setLiked(true);
    }
  };

  return (
    <article className="usercard">
      <img className="usercard__img" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <div className="usercard__body">
        <h3 className="usercard__name">{user.name.first} {user.name.last}</h3>
        <p className="usercard__email">{user.email}</p>
        <div className="usercard__actions">
          <button className="btn" onClick={toggleLike}>{liked ? "♥ Liked" : "♡ Like"}</button>
          <Link to={`/team/${id}`} state={{ user }} className="btn" style={{ background: "transparent", color: "var(--text)", border: "1px solid rgba(0,0,0,0.08)" }}>
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
