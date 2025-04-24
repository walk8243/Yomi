import { initial } from "./situation";
import { firstPlayer, fu, gin, gyoku, keima, kaku, kin, PieceType, secondPlayer, Situation, hisha, tokin, narikyo, narikei, uma, kyosha, ryu, Hands, Spot } from "./variable";

const baseUrl = 'http://wdoor.c.u-tokyo.ac.jp/shogi/LATEST/';
export const csaUrl = 'http://wdoor.c.u-tokyo.ac.jp/shogi/LATEST//2025/04/23/wdoor+floodgate-300-10F+suisho5-1M+Frieren+20250423160002.csa';

export const parseCsa = async (url: string): Promise<Situation[]> => {
	const response = await fetch(url.replace(baseUrl, '/kif'), {
		mode: 'no-cors',
		headers: {
			'accept': 'text/plain',
		}
	});
	const text = await response.text();

	return parseCsaText(text);
}

const parseCsaText = (text: string): Situation[] => {
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
		const match = trimmed.match(/^([+-])(\d{2})(\d{2})([A-Z]{2})$/);
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
		case 'UM': return uma;
		case 'RY': return ryu;
		default: throw new Error(`Unknown piece type: ${text}`);
	}
}
