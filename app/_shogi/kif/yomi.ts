import { parseCsa } from '../utils/parser';
import { Kif } from "../utils/variable";

export const get = async (name: string): Promise<Kif> => {
	const response = await fetch(`/kif/${name}.csa`);
	const text = await response.text();

	return parseCsa(text);
}
