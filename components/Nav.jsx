import { nav } from '@/styles/Nav.module.css';
import Link from 'next/link';


export function Nav() {
  return <nav className={nav}>
    <ul>
      <li>
        <Link href="/">Hime</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
      <li>
        <Link href="todo">To Do List</Link>
      </li>
    </ul>
  </nav>
}