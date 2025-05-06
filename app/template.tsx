import Image from 'next/image';
import styles from './page.module.scss';
import appImage from './yomi.png';

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 hidden>よみ</h1>
        <Image
          className={styles.logo}
          src={appImage}
          alt="Yomi icon"
          width={100}
          height={97}
          priority
        />
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>
          <a href="https://github.com/walk8243/Yomi">GitHub</a>
        </p>
      </footer>
    </div>
  );
}
