'use client';

import { useState } from "react";
import Board from "./board";
import { initial } from "./situation";
import { BoardData, Situation } from "./variable";
import styles from "./kif.module.scss";

export default function Kif() {
  const kif: Situation[] = [
    {
      board: initial(),
      hands: null,
    },
  ];
  const [board, setBoard] = useState<BoardData>(kif[0].board);

  return (
    <div className={styles.container}>
      <Board board={board} />
      <div>
        <ul className={styles.list}>
          {kif.map((situation, index) => (
            <li className={styles.item} key={situation.hands ? `${index}-${situation.hands.after.x}-${situation.hands.after.y}` : 'init'}>
              <button onClick={() => { setBoard(situation.board); }}>
                {situation.hands ? `${situation.hands.after.x}${situation.hands.after.y}` : '初期盤面'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
