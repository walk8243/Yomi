export const firstPlayer = Symbol('先手');
export const secondPlayer = Symbol('後手');

export type Player = typeof firstPlayer | typeof secondPlayer;

export const fu = Symbol('歩');
export const kyosha = Symbol('香');
export const keima = Symbol('桂');
export const gin = Symbol('銀');
export const kin = Symbol('金');
export const gyoku = Symbol('玉');
export const hisha = Symbol('飛');
export const kaku = Symbol('角');
export const tokin = Symbol('と金');
export const narikyo = Symbol('成香');
export const narikei = Symbol('成桂');
export const narikin = Symbol('成銀');
export const uma = Symbol('馬');
export const ryu = Symbol('龍');

export type PieceType = typeof fu | typeof kyosha | typeof keima | typeof gin | typeof kin | typeof gyoku | typeof hisha | typeof kaku
 | typeof tokin | typeof narikyo | typeof narikei | typeof narikin | typeof uma | typeof ryu;

export type Spot = {
	x: number;
	y: number;
};

export type Piece = {
	type: PieceType;
	player: Player;
};
export type BoardData = (Piece | null)[];
export type Hands = {
	turn: Player;
	before: Spot;
	after: Spot;
	piece: PieceType;
};

export interface Situation {
	board: BoardData;
	hands: Hands | null;
}

