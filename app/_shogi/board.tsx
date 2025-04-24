import Piece from './piece';
import { initial } from './situation';
import styles from './board.module.scss';

export default function Board() {
  const board = initial();
  return (
    <div className={styles.board}>
      <div className={styles.board__inner}>
        {board.map((piece) => (
          <div className={styles.board__space} key={piece ? `${piece.player.description}-${piece.type.description}` : 'empty'}>
            {piece ? <Piece piece={piece} /> : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
