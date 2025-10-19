
import React from "react";
import "./UserList.css";
import UserCard from "../UserCard/UserCard";

const UserList = ({ users }) => {
  return (
    <div className="userlist-grid">
      {users.map(user => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default UserList;

