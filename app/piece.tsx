import styles from './board.module.scss';

export default function Piece({ type, turn }: Readonly<{ type: string | null, turn: 'first' | 'second' | null }>) {
  if (type === null || turn === null) {
    return <></>;
  }

  const pieceClass = styles.piece;
  const turnClass = styles[`piece--${turn}`];
  return <div className={`${pieceClass} ${turnClass}`}>{pieceText(type)}</div>;
}

const pieceText = (type: string) => {
  switch (type) {
    case 'Fu':
      return '歩';
    case 'Kyosha':
      return '香';
    case 'Keima':
      return '桂';
    case 'Gin':
      return '銀';
    case 'Kin':
      return '金';
    case 'Gyoku':
      return '玉';
    case 'Hisha':
      return '飛';
    case 'Kaku':
      return '角';
    default:
      return '';
  }
};
