import { initial } from "./situation";
import { firstPlayer, fu, gin, gyoku, keima, kaku, kin, PieceType, secondPlayer, Situation, hisha, tokin, narikyo, narikei, uma, kyosha, ryu, Hands, Spot, narigin } from "./variable";

const moverRegex = /^([+-])(\d{2})(\d{2})([A-Z]{2})$/;
export const parseCsa = (text: string): Situation[] => {
	const lines = text.split(/\r?\n/);
	const board = initial();
	const situations: Situation[] = [
		{
			board: [...board],
			hands: null,
		}
	];

	for (const line of lines) {
		const trimmed = line.trim();

		// 指し手（+7776FU など）だけ対象
		const match = moverRegex.exec(trimmed);
		if (!match) {
			continue;
		}

		const [, player, from, to, piece] = match;
		const hands: Hands = {
			turn: player === '+' ? firstPlayer : secondPlayer,
			before: {
				x: parseInt(from.slice(0, 1)),
				y: parseInt(from.slice(1)),
			},
			after: {
				x: parseInt(to.slice(0, 1)),
				y: parseInt(to.slice(1)),
			},
			piece: parsePieceType(piece),
		};
		board[calcIndex(hands.after)] = {
			type: hands.piece,
			player: hands.turn,
		};
		if (hands.before.x === 0 && hands.before.y === 0) {
			// 打ち手
		} else {
			board[calcIndex(hands.before)] = null;
		}

		situations.push({
			board: [...board],
			hands,
		});
	}

	return situations;
}

export const printSituationHands = (hands: Hands | null): string => {
	if (!hands) {
		return '初期盤面';
	}

	return `${symbolTurnTypes[hands.turn]}${fullWidthDigits[hands.after.x]}${kanjiDigits[hands.after.y]}${kanjiPieceTypes[hands.piece]}`;
}

const calcIndex = ({ x, y }: Spot): number => 9 * (y - 1) + (9 - x);
const parsePieceType = (text: string): PieceType => {
	switch(text) {
		case 'FU': return fu;
		case 'KY': return kyosha;
		case 'KE': return keima;
		case 'GI': return gin;
		case 'KI': return kin;
		case 'KA': return kaku;
		case 'HI': return hisha;
		case 'OU': return gyoku;
		case 'TO': return tokin;
		case 'NY': return narikyo;
		case 'NK': return narikei;
		case 'NG': return narigin;
		case 'UM': return uma;
		case 'RY': return ryu;
		default: throw new Error(`Unknown piece type: ${text}`);
	}
}

const symbolTurnTypes = {
	[firstPlayer]: '☗',
	[secondPlayer]: '☖',
}
const fullWidthDigits = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"];
const kanjiDigits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const kanjiPieceTypes = {
	[fu]: "歩",
	[kyosha]: "香",
	[keima]: "桂",
	[gin]: "銀",
	[kin]: "金",
	[kaku]: "角",
	[hisha]: "飛",
	[tokin]: "と",
	[narikyo]: "成香",
	[narikei]: "成桂",
	[narigin]: "成銀",
	[uma]: "馬",
	[ryu]: "龍",
	[gyoku]: "玉",
};
