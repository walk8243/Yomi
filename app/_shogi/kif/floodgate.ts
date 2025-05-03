import { parseCsa } from '../utils/parser';
import { Situation } from '../utils/variable';

export const csaUrl = 'http://wdoor.c.u-tokyo.ac.jp/shogi/LATEST//2025/04/23/wdoor+floodgate-300-10F+suisho5-1M+Frieren+20250423160002.csa';
const floodgateUrlRegex = /http:\/\/wdoor\.c\.u-tokyo\.ac\.jp\/shogi\/LATEST\//;

export const get = async (url: string): Promise<Situation[]> => {
	if (!floodgateUrlRegex.test(url)) {
		throw new Error(`URLが不正です ${url}`);
	}

	const response = await fetch(`/kif/floodgate?url=${encodeURIComponent(url)}`);
	const text = await response.text();

	return parseCsa(text);
}
