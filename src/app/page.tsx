import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
      <main className="landingpage">
        <Image
          src='/Icon.png'
          height={90}
          width={80}
          alt='film icon'
        />
        <h1>Welcome to Movie Watchlist!</h1>
        <Link
          href={'search'}
        >Start exploring!</Link>
        <footer className={styles.footer}>
        </footer>
      </main>
  );
}
