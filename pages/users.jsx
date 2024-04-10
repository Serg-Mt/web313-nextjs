import FetchUser from '@/components/FetchUser';
import ListUser from '@/components/ListUsers';
import { useState } from 'react';

export default function UsersPage() {
  const
    [id, setId] = useState(1);
  return <>
    <h1>Users</h1>
    <input type="number" value={id} onChange={evt => setId(evt.target.value)} />
    <FetchUser id={id} />
    <ListUser />
  </>;
}