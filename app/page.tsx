import Image from "next/image";
import Board from './_shogi/board';
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Image
        className={styles.logo}
        src="/yomi.png"
        alt="Yomi icon"
        width={180}
        height={185}
        priority
      />

      <Board />
    </>
  );
}
