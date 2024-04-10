import OneUser from '../components/OneUser'
import FetchUser from '../components/FetchUser'
import { useState } from 'react'


export default function ListUser() {
  const
    [users, setUsers] = useState([]),
    [error, setError] = useState(null);
  return <div className="user-list">
    <button onClick={async () => {
      try {
        setError(null);
        setUsers(null);
        const
          res = await fetch('https://jsonplaceholder.typicode.com/users/');
        if (!res.ok) throw (new Error(res.status));
        const
          u = await res.json();
        setUsers(u);
      } catch (err) {
        setError(err);
        setUsers([]);
      }
    }}>fetch</button>

    {error && <div>Ошибка: {error.message}</div>}

    {users && <ol>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ol>}
    {!users && !error && <div className="spinner" />}

  </div>;
}