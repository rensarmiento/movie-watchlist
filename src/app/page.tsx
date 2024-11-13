import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className='landingpage'>
      <main>
        <Image
          src='/Icon.png'
          height={200}
          width={200}
          alt='film icon'
        />
        <footer className={styles.footer}>

        </footer>
      </main>
    </div>
  );
}
