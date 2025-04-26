import { parseCsa } from '../utils/parser';
import { Situation } from "../utils/variable";

export const get = async (name: string): Promise<Situation[]> => {
	const response = await fetch(`/kif/local?filename=${name}`);
	const text = await response.text();

	return parseCsa(text);
}
