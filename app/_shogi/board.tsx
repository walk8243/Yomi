import Piece from './piece';
import styles from './board.module.scss';
import { BoardData } from './variable';

export default function Board({ board }: Readonly<{ board: BoardData }>) {
  return (
    <div className={styles.board}>
      <div className={styles.board__inner}>
        {board.map((piece, index) => (
          <div className={styles.board__space} key={piece ? `${index}-${piece.player.description}-${piece.type.description}` : `${index}-empty`}>
            {piece ? <Piece piece={piece} /> : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
