import styles from './board.module.scss';
import { blackPlayer, fu, gin, gyoku, hisha, kaku, keima, kin, kyosha, narikei, narigin, narikyo, Piece, PieceType, ryu, tokin, uma } from './utils/variable';

export default function PieceDom({ piece: { type, player } }: Readonly<{ piece: Piece }>) {
  const pieceClass = styles.piece;
  const turnClass = styles[`piece--${player === blackPlayer ? 'first' : 'second'}`];
  return <div className={`${pieceClass} ${turnClass}`}>
    {pieceText(type)}
  </div>;
}

const pieceText = (type: PieceType) => {
  switch (type) {
    case fu:
      return '歩';
    case kyosha:
      return '香';
    case keima:
      return '桂';
    case gin:
      return '銀';
    case kin:
      return '金';
    case gyoku:
      return '玉';
    case hisha:
      return '飛';
    case kaku:
      return '角';
    case tokin:
      return 'と';
    case narikyo:
      return '成香';
    case narikei:
      return '成桂';
    case narigin:
      return '成銀';
    case uma:
      return '馬';
    case ryu:
      return '龍';
  }
};
