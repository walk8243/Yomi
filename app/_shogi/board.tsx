import Piece from './piece';
import styles from './board.module.scss';
import { BoardData, firstPlayer, fu, gin, hisha, kaku, keima, kin, kyosha, secondPlayer } from './utils/variable';

export default function Board({ board }: Readonly<{ board: BoardData }>) {
  return (
    <div className={styles.container}>
      <div className={styles.container__second}>
        <div className={styles.stand}>
          <Piece piece={{ type: hisha, player: secondPlayer }} />
          <Piece piece={{ type: kaku, player: secondPlayer }} />
          <Piece piece={{ type: kyosha, player: secondPlayer }} />
          <Piece piece={{ type: fu, player: secondPlayer }} />
          <Piece piece={{ type: fu, player: secondPlayer }} />
          <Piece piece={{ type: fu, player: secondPlayer }} />
        </div>
        <div className={styles.player}>藤井聡太 竜王名人</div>
      </div>
      <div className={styles.board}>
        <div className={styles.board__inner}>
          {board.map((piece, index) => (
            <div className={styles.board__square} key={piece ? `${index}-${piece.player.description}-${piece.type.description}` : `${index}-empty`}>
              {piece ? <Piece piece={piece} /> : ''}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.container__first}>
        <div className={styles.stand}>
          <Piece piece={{ type: kin, player: firstPlayer }} />
          <Piece piece={{ type: kin, player: firstPlayer }} />
          <Piece piece={{ type: gin, player: firstPlayer }} />
          <Piece piece={{ type: keima, player: firstPlayer }} />
          <Piece piece={{ type: keima, player: firstPlayer }} />
          <Piece piece={{ type: fu, player: firstPlayer }} />
        </div>
        <div className={styles.player}>永瀬拓矢 九段</div>
      </div>
    </div>
  );
}
