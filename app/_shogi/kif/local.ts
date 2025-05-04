import { parseCsa } from "../utils/parser";
import { Kif } from "../utils/variable";

export const read = (file: File): Promise<Kif> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => {
			if (!reader.result) {
				reject(new Error('ファイルからデータが読み込めませんでした'));
				return;
			}
			resolve(parseCsa(readResult(reader.result)));
		}, false);
		reader.readAsText(file);
	});
}

const readResult = (result: string | ArrayBuffer): string => {
	if (typeof result === 'string') {
		return result;
	}
	return Buffer.from(result).toString();
}
