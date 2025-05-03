import { BoardData, blackPlayer, whitePlayer, fu, gin, gyoku, hisha, kaku, keima, kin, kyosha } from './variable';

export const initial = (): BoardData => ([
	// 1段目（後手の後陣）
	{ type: kyosha, player: whitePlayer }, // 9一 香車
	{ type: keima, player: whitePlayer }, // 8一 桂馬
	{ type: gin, player: whitePlayer }, // 7一 銀将
	{ type: kin, player: whitePlayer }, // 6一 金将
	{ type: gyoku, player: whitePlayer }, // 5一 玉将
	{ type: kin, player: whitePlayer }, // 4一 金将
	{ type: gin, player: whitePlayer }, // 3一 銀将
	{ type: keima, player: whitePlayer }, // 2一 桂馬
	{ type: kyosha, player: whitePlayer }, // 1一 香車

	// 2段目（後手の後陣）
	null, // 9二
	{ type: hisha, player: whitePlayer }, // 8二 飛車
	null, // 7二
	null, // 6二
	null, // 5二
	null, // 4二
	null, // 3二
	{ type: kaku, player: whitePlayer }, // 2二 角行
	null, // 1二

	// 3段目（後手の前陣）
	{ type: fu, player: whitePlayer }, // 9三 歩兵
	{ type: fu, player: whitePlayer }, // 8三 歩兵
	{ type: fu, player: whitePlayer }, // 7三 歩兵
	{ type: fu, player: whitePlayer }, // 6三 歩兵
	{ type: fu, player: whitePlayer }, // 5三 歩兵
	{ type: fu, player: whitePlayer }, // 4三 歩兵
	{ type: fu, player: whitePlayer }, // 3三 歩兵
	{ type: fu, player: whitePlayer }, // 2三 歩兵
	{ type: fu, player: whitePlayer }, // 1三 歩兵

	// 4段目（空き）
	null, // 9四
	null, // 8四
	null, // 7四
	null, // 6四
	null, // 5四
	null, // 4四
	null, // 3四
	null, // 2四
	null, // 1四

	// 5段目（空き）
	null, // 9五
	null, // 8五
	null, // 7五
	null, // 6五
	null, // 5五
	null, // 4五
	null, // 3五
	null, // 2五
	null, // 1五

	// 6段目（空き）
	null, // 9六
	null, // 8六
	null, // 7六
	null, // 6六
	null, // 5六
	null, // 4六
	null, // 3六
	null, // 2六
	null, // 1六

	// 7段目（先手の前陣）
	{ type: fu, player: blackPlayer }, // 9七 歩兵
	{ type: fu, player: blackPlayer }, // 8七 歩兵
	{ type: fu, player: blackPlayer }, // 7七 歩兵
	{ type: fu, player: blackPlayer }, // 6七 歩兵
	{ type: fu, player: blackPlayer }, // 5七 歩兵
	{ type: fu, player: blackPlayer }, // 4七 歩兵
	{ type: fu, player: blackPlayer }, // 3七 歩兵
	{ type: fu, player: blackPlayer }, // 2七 歩兵
	{ type: fu, player: blackPlayer }, // 1七 歩兵

	// 8段目（先手の後陣）
	null, // 9八
	{ type: kaku, player: blackPlayer }, // 8八 角行
	null, // 7八
	null, // 6八
	null, // 5八
	null, // 4八
	null, // 3八
	{ type: hisha, player: blackPlayer }, // 2八 飛車
	null, // 1八

	// 9段目（先手の後陣）
	{ type: kyosha, player: blackPlayer }, // 9九 香車
	{ type: keima, player: blackPlayer }, // 8九 桂馬
	{ type: gin, player: blackPlayer }, // 7九 銀将
	{ type: kin, player: blackPlayer }, // 6九 金将
	{ type: gyoku, player: blackPlayer }, // 5九 玉将
	{ type: kin, player: blackPlayer }, // 4九 金将
	{ type: gin, player: blackPlayer }, // 3九 銀将
	{ type: keima, player: blackPlayer }, // 2九 桂馬
	{ type: kyosha, player: blackPlayer }, // 1九 香車
]);
