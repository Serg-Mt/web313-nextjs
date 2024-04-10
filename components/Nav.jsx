import { nav } from '@/styles/Nav.module.css';
import Link from 'next/link';


export function Nav() {
  return <nav className={nav}>
    <ul>
      <li>
        <Link href="/">Hime</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
}