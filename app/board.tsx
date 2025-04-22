import styles from './board.module.scss';

export default function Board() {
  const spaces = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ];
  return (
    <div className={styles.board}>
      <div className={styles.board__inner}>
        {spaces.map((row, i) => (
          <>{
            row.map((_space, j) => (
              <BoardSpace key={`${i}-${j}`} />
            ))
          }</>
        ))}
      </div>
    </div>
  );
}

const BoardSpace = () => {
  return (
    <div className={styles.board__space}></div>
  )
}
