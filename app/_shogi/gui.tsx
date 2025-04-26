import { useState } from "react";
import Board from "./board";
import { BoardData, Situation } from "./utils/variable";
import styles from "./gui.module.scss";
import { printSituationHands } from "./utils/parser";

export default function Gui({ kif }: Readonly<{ kif: Situation[] }>) {
  const [board, setBoard] = useState<BoardData>(kif[0].board);

  return (
    <div className={styles.container}>
      <Board board={board} />
      <ul className={styles.list}>
        {kif.map((situation, index) => (
          <li className={styles.item} key={situation.hands ? `${index}-${situation.hands.after.x}-${situation.hands.after.y}` : 'init'}>
            <button onClick={() => { setBoard(situation.board); }}>
              {printSituationHands(situation.hands)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
