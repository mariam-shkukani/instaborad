import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  // جلب المستخدمين عند التحميل الأول
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (append = false) => {
    try {
      setLoading(true);
      const res = await axios.get('https://randomuser.me/api/?results=12');
      const results = res.data.results;
      setUsers(prev => (append ? [...prev, ...results] : results));
    } catch (err) {
      console.error(err);
      alert('An Error occurred while fetching users .');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => fetchUsers(true);

  const filtered = users.filter(u => {
    const full = `${u.name.first} ${u.name.last}`.toLowerCase();
    return full.includes(search.toLowerCase());
  });

  return (
    <section className="userlist">
      <div className="userlist__controls">
        <input
          className="userlist__search"
          type="text"
          placeholder="Search By Name ..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn" onClick={() => fetchUsers(false)}>Update</button>
      </div>

      <div className="userlist__grid">
        {filtered.length === 0 && !loading && <p>No Resules found.</p>}
        {filtered.map(u => (
          <UserCard key={u.login.uuid} user={u} />
        ))}
      </div>

      <div className="userlist__footer">
        <button className="btn" onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </section>
  );
}

export default UserList;
