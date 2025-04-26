import Image from 'next/image';
import styles from './page.module.scss';

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/yomi.png"
          alt="Yomi icon"
          width={100}
          height={97}
          priority
        />

        <h1>よみ</h1>
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
