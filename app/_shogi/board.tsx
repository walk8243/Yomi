import Piece from './piece';
import styles from './board.module.scss';
import { BoardData, Capture, Info, blackPlayer, whitePlayer } from './utils/variable';

export default function Board({ board, capture, info }: Readonly<{ board: BoardData, capture: Capture, info: Info }>) {
  return (
    <div className={styles.container}>
      <div className={styles.container__second}>
        <div className={styles.stand}>
          {capture[whitePlayer].map((type, index) => (
            <Piece piece={{ type, player: whitePlayer }} key={`${whitePlayer.description}-${type.description}-${index}`} />
          ))}
        </div>
        <div className={styles.player}>{info.white}</div>
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
          {capture[blackPlayer].map((type, index) => (
            <Piece piece={{ type, player: blackPlayer }} key={`${blackPlayer.description}-${type.description}-${index}`} />
          ))}
        </div>
        <div className={styles.player}>{info.black}</div>
      </div>
    </div>
  );
}
