import { useState } from "react";
import Board from "./board";
import { Situation } from "./utils/variable";
import styles from "./viewer.module.scss";
import { printSituationHands } from "./utils/parser";

export default function Viewer({ kif }: Readonly<{ kif: Situation[] }>) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <section className={styles.container}>
      <Board board={kif[selected].board} capture={kif[selected].capture} />
      <ul className={styles.list}>
        {kif.map((situation, index) => (
          <li className={`${styles.item} ${selected === index ? styles['item--selected'] : ''}`}
              key={situation.hands ? `${index}-${situation.hands.after.x}-${situation.hands.after.y}` : 'init'}>
            <button onClick={() => { setSelected(index); }}>
              <span className={styles.item__index}>{index}</span>
              <span className={styles.item__text}>{printSituationHands(situation.hands)}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
