import { Board, firstPlayer, secondPlayer, fu, gin, gyoku, hisha, kaku, keima, kin, kyosha } from './variable';

export const initial = (): Board => ([
	// 1段目（後手の後陣）
	{ type: kyosha, player: secondPlayer }, // 9一 香車
	{ type: keima, player: secondPlayer }, // 8一 桂馬
	{ type: gin, player: secondPlayer }, // 7一 銀将
	{ type: kin, player: secondPlayer }, // 6一 金将
	{ type: gyoku, player: secondPlayer }, // 5一 玉将
	{ type: kin, player: secondPlayer }, // 4一 金将
	{ type: gin, player: secondPlayer }, // 3一 銀将
	{ type: keima, player: secondPlayer }, // 2一 桂馬
	{ type: kyosha, player: secondPlayer }, // 1一 香車

	// 2段目（後手の後陣）
	null, // 9二
	{ type: hisha, player: secondPlayer }, // 8二 飛車
	null, // 7二
	null, // 6二
	null, // 5二
	null, // 4二
	null, // 3二
	{ type: kaku, player: secondPlayer }, // 2二 角行
	null, // 1二

	// 3段目（後手の前陣）
	{ type: fu, player: secondPlayer }, // 9三 歩兵
	{ type: fu, player: secondPlayer }, // 8三 歩兵
	{ type: fu, player: secondPlayer }, // 7三 歩兵
	{ type: fu, player: secondPlayer }, // 6三 歩兵
	{ type: fu, player: secondPlayer }, // 5三 歩兵
	{ type: fu, player: secondPlayer }, // 4三 歩兵
	{ type: fu, player: secondPlayer }, // 3三 歩兵
	{ type: fu, player: secondPlayer }, // 2三 歩兵
	{ type: fu, player: secondPlayer }, // 1三 歩兵

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
	{ type: fu, player: firstPlayer }, // 9七 歩兵
	{ type: fu, player: firstPlayer }, // 8七 歩兵
	{ type: fu, player: firstPlayer }, // 7七 歩兵
	{ type: fu, player: firstPlayer }, // 6七 歩兵
	{ type: fu, player: firstPlayer }, // 5七 歩兵
	{ type: fu, player: firstPlayer }, // 4七 歩兵
	{ type: fu, player: firstPlayer }, // 3七 歩兵
	{ type: fu, player: firstPlayer }, // 2七 歩兵
	{ type: fu, player: firstPlayer }, // 1七 歩兵

	// 8段目（先手の後陣）
	null, // 9八
	{ type: kaku, player: firstPlayer }, // 8八 角行
	null, // 7八
	null, // 6八
	null, // 5八
	null, // 4八
	null, // 3八
	{ type: hisha, player: firstPlayer }, // 2八 飛車
	null, // 1八

	// 9段目（先手の後陣）
	{ type: kyosha, player: firstPlayer }, // 9九 香車
	{ type: keima, player: firstPlayer }, // 8九 桂馬
	{ type: gin, player: firstPlayer }, // 7九 銀将
	{ type: kin, player: firstPlayer }, // 6九 金将
	{ type: gyoku, player: firstPlayer }, // 5九 玉将
	{ type: kin, player: firstPlayer }, // 4九 金将
	{ type: gin, player: firstPlayer }, // 3九 銀将
	{ type: keima, player: firstPlayer }, // 2九 桂馬
	{ type: kyosha, player: firstPlayer }, // 1九 香車
]);
