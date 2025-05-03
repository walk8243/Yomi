import Piece from './piece';
import styles from './board.module.scss';
import { BoardData, Capture, firstPlayer, secondPlayer } from './utils/variable';

export default function Board({ board, capture }: Readonly<{ board: BoardData, capture: Capture }>) {
  return (
    <div className={styles.container}>
      <div className={styles.container__second}>
        <div className={styles.stand}>
          {capture[secondPlayer].map((type, index) => (
            <Piece piece={{ type, player: secondPlayer }} key={`${secondPlayer.description}-${type.description}-${index}`} />
          ))}
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
          {capture[firstPlayer].map((type, index) => (
            <Piece piece={{ type, player: firstPlayer }} key={`${firstPlayer.description}-${type.description}-${index}`} />
          ))}
        </div>
        <div className={styles.player}>永瀬拓矢 九段</div>
      </div>
    </div>
  );
}
