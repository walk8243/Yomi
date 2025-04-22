import Piece from './piece';
import styles from './board.module.scss';

export default function Board() {
  const spaces: { c: number, r: number, piece: string | null, turn: 'first' | 'second' | null, key: string }[][] = [
    [
      { c: 1, r: 1, piece: 'Kyosha', turn: 'second', key: '1-1' },
      { c: 2, r: 1, piece: 'Keima', turn: 'second', key: '1-2' },
      { c: 3, r: 1, piece: 'Gin', turn: 'second', key: '1-3' },
      { c: 4, r: 1, piece: 'Kin', turn: 'second', key: '1-4' },
      { c: 5, r: 1, piece: 'Gyoku', turn: 'second', key: '1-5' },
      { c: 6, r: 1, piece: 'Kin', turn: 'second', key: '1-6' },
      { c: 7, r: 1, piece: 'Gin', turn: 'second', key: '1-7' },
      { c: 8, r: 1, piece: 'Keima', turn: 'second', key: '1-8' },
      { c: 9, r: 1, piece: 'Kyosha', turn: 'second', key: '1-9' },
    ],
    [
      { c: 1, r: 2, piece: null, turn: null, key: '2-1' },
      { c: 2, r: 2, piece: 'Hisha', turn: 'second', key: '2-2' },
      { c: 3, r: 2, piece: null, turn: null, key: '2-3' },
      { c: 4, r: 2, piece: null, turn: null, key: '2-4' },
      { c: 5, r: 2, piece: null, turn: null, key: '2-5' },
      { c: 6, r: 2, piece: null, turn: null, key: '2-6' },
      { c: 7, r: 2, piece: null, turn: null, key: '2-7' },
      { c: 8, r: 2, piece: 'Kaku', turn: 'second', key: '2-8' },
      { c: 9, r: 2, piece: null, turn: null, key: '2-9' },
    ],
    [
      { c: 1, r: 3, piece: 'Fu', turn: 'second', key: '3-1' },
      { c: 2, r: 3, piece: 'Fu', turn: 'second', key: '3-2' },
      { c: 3, r: 3, piece: 'Fu', turn: 'second', key: '3-3' },
      { c: 4, r: 3, piece: 'Fu', turn: 'second', key: '3-4' },
      { c: 5, r: 3, piece: 'Fu', turn: 'second', key: '3-5' },
      { c: 6, r: 3, piece: 'Fu', turn: 'second', key: '3-6' },
      { c: 7, r: 3, piece: 'Fu', turn: 'second', key: '3-7' },
      { c: 8, r: 3, piece: 'Fu', turn: 'second', key: '3-8' },
      { c: 9, r: 3, piece: 'Fu', turn: 'second', key: '3-9' },
    ],
    [
      { c: 1, r: 4, piece: null, turn: null, key: '4-1' },
      { c: 2, r: 4, piece: null, turn: null, key: '4-2' },
      { c: 3, r: 4, piece: null, turn: null, key: '4-3' },
      { c: 4, r: 4, piece: null, turn: null, key: '4-4' },
      { c: 5, r: 4, piece: null, turn: null, key: '4-5' },
      { c: 6, r: 4, piece: null, turn: null, key: '4-6' },
      { c: 7, r: 4, piece: null, turn: null, key: '4-7' },
      { c: 8, r: 4, piece: null, turn: null, key: '4-8' },
      { c: 9, r: 4, piece: null, turn: null, key: '4-9' },
    ],
    [
      { c: 1, r: 5, piece: null, turn: null, key: '5-1' },
      { c: 2, r: 5, piece: null, turn: null, key: '5-2' },
      { c: 3, r: 5, piece: null, turn: null, key: '5-3' },
      { c: 4, r: 5, piece: null, turn: null, key: '5-4' },
      { c: 5, r: 5, piece: null, turn: null, key: '5-5' },
      { c: 6, r: 5, piece: null, turn: null, key: '5-6' },
      { c: 7, r: 5, piece: null, turn: null, key: '5-7' },
      { c: 8, r: 5, piece: null, turn: null, key: '5-8' },
      { c: 9, r: 5, piece: null, turn: null, key: '5-9' },
    ],
    [
      { c: 1, r: 6, piece: null, turn: null, key: '6-1' },
      { c: 2, r: 6, piece: null, turn: null, key: '6-2' },
      { c: 3, r: 6, piece: null, turn: null, key: '6-3' },
      { c: 4, r: 6, piece: null, turn: null, key: '6-4' },
      { c: 5, r: 6, piece: null, turn: null, key: '6-5' },
      { c: 6, r: 6, piece: null, turn: null, key: '6-6' },
      { c: 7, r: 6, piece: null, turn: null, key: '6-7' },
      { c: 8, r: 6, piece: null, turn: null, key: '6-8' },
      { c: 9, r: 6, piece: null, turn: null, key: '6-9' },
    ],
    [
      { c: 1, r: 7, piece: 'Fu', turn: 'first', key: '7-1' },
      { c: 2, r: 7, piece: 'Fu', turn: 'first', key: '7-2' },
      { c: 3, r: 7, piece: 'Fu', turn: 'first', key: '7-3' },
      { c: 4, r: 7, piece: 'Fu', turn: 'first', key: '7-4' },
      { c: 5, r: 7, piece: 'Fu', turn: 'first', key: '7-5' },
      { c: 6, r: 7, piece: 'Fu', turn: 'first', key: '7-6' },
      { c: 7, r: 7, piece: 'Fu', turn: 'first', key: '7-7' },
      { c: 8, r: 7, piece: 'Fu', turn: 'first', key: '7-8' },
      { c: 9, r: 7, piece: 'Fu', turn: 'first', key: '7-9' },
    ],
    [
      { c: 1, r: 8, piece: null, turn: null, key: '8-1' },
      { c: 2, r: 8, piece: 'Kaku', turn: 'first', key: '8-2' },
      { c: 3, r: 8, piece: null, turn: null, key: '8-3' },
      { c: 4, r: 8, piece: null, turn: null, key: '8-4' },
      { c: 5, r: 8, piece: null, turn: null, key: '8-5' },
      { c: 6, r: 8, piece: null, turn: null, key: '8-6' },
      { c: 7, r: 8, piece: null, turn: null, key: '8-7' },
      { c: 8, r: 8, piece: 'Hisha', turn: 'first', key: '8-8' },
      { c: 9, r: 8, piece: null, turn: null, key: '8-9' },
    ],
    [
      { c: 1, r: 9, piece: 'Kyosha', turn: 'first', key: '9-1' },
      { c: 2, r: 9, piece: 'Keima', turn: 'first', key: '9-2' },
      { c: 3, r: 9, piece: 'Gin', turn: 'first', key: '9-3' },
      { c: 4, r: 9, piece: 'Kin', turn: 'first', key: '9-4' },
      { c: 5, r: 9, piece: 'Gyoku', turn: 'first', key: '9-5' },
      { c: 6, r: 9, piece: 'Kin', turn: 'first', key: '9-6' },
      { c: 7, r: 9, piece: 'Gin', turn: 'first', key: '9-7' },
      { c: 8, r: 9, piece: 'Keima', turn: 'first', key: '9-8' },
      { c: 9, r: 9, piece: 'Kyosha', turn: 'first', key: '9-9' },
    ]
  ];
  return (
    <div className={styles.board}>
      <div className={styles.board__inner}>
        {spaces.map((row) => (
          <>{
            row.map((space) => (
              <div className={styles.board__space} key={space.key}>
                <Piece type={space.piece} turn={space.turn} />
              </div>
            ))
          }</>
        ))}
      </div>
    </div>
  );
}
