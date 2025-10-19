import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList/UserList";

const Team = () => {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState(12);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (count = results, append = false) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://randomuser.me/api/?results=${count}`);
      const fetched = res.data.results || [];
      setUsers(prev => (append ? [...prev, ...fetched] : fetched));
    } catch (err) {
      console.error("fetch error", err);
      alert("Error fetching users — open console for details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const handleFetch = () => fetchUsers(Number(results));
  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://randomuser.me/api/?results=12`);
      setUsers(prev => [...prev, ...res.data.results]);
    } catch(err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  return (
    <section style={{ padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h1>Team</h1>
        <div className="flex">
          <input
            type="number"
            min="1"
            max="100"
            value={results}
            onChange={e => setResults(e.target.value)}
            style={{ width: 80, padding: 8, borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)" }}
          />
          <button className="btn" onClick={handleFetch} disabled={loading}>{loading ? "Loading..." : "Fetch"}</button>
          <button className="btn" onClick={handleLoadMore} disabled={loading}>{loading ? "..." : "Load More"}</button>
        </div>
      </div>

      <UserList users={users} />

      {users.length === 0 && !loading && <p style={{ color: "var(--muted)", marginTop: 12 }}>No users yet — try fetching.</p>}
    </section>
  );
};

export default Team;
