import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LikedUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("likedUsers") || "[]");
    setUsers(data);
  }, []);

  const unlike = (uuid) => {
    const updated = users.filter(u => u.login.uuid !== uuid);
    setUsers(updated);
    localStorage.setItem("likedUsers", JSON.stringify(updated));
  };

  return (
    <section style={{ padding: 24 }}>
      <h1>Liked Users</h1>
      {users.length === 0 && <p style={{ color: "var(--muted)" }}>You have no liked users yet.</p>}
      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        {users.map(u => (
          <div key={u.login.uuid} style={{ display: "flex", gap: 12, alignItems: "center", background: "var(--card-bg)", padding: 12, borderRadius: 10 }}>
            <img src={u.picture.thumbnail} alt={`${u.name.first}`} style={{ width: 56, height: 56, borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>{u.name.first} {u.name.last}</strong>
                <div style={{ display: "flex", gap: 8 }}>
                  <Link to={`/team/${u.login.uuid}`} state={{ user: u }} className="btn" style={{ background: "transparent", color: "var(--text)", border: "1px solid rgba(0,0,0,0.08)" }}>View</Link>
                  <button className="btn" onClick={() => unlike(u.login.uuid)}>Unlike</button>
                </div>
              </div>
              <p style={{ color: "var(--muted)", marginTop: 6 }}>{u.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LikedUsers;
