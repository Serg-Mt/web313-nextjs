import '@/styles/global.css';
import { Nav } from '../components/Nav';


export default function MyApp({ Component, pageProps }) {
  return <>
    <header><Nav /></header>
    <main><Component {...pageProps} /></main>
    <footer>подвал</footer>
  </>
}