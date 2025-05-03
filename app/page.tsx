'use client';

import { useEffect, useReducer, useState } from "react";
import Input, { InputDataType } from "./_shogi/input";
import Viewer from './_shogi/viewer';
import { initial } from './_shogi/utils/situation';
import { get as getFloodgate } from "./_shogi/kif/floodgate";
import { get as getYomi } from "./_shogi/kif/local";
import { blackPlayer, whitePlayer, Kif } from "./_shogi/utils/variable";

export default function Home() {
  const [kif, setKif] = useState<Kif>({
    info: {
      black: '',
      white: '',
    },
    situations: [{board: initial(), hands: null, capture: {
      [blackPlayer]: [],
      [whitePlayer]: [],
    }}]
  });
  const [data, dispatch] = useReducer<InputDataType | null, [InputDataType]>((_prev, type) => {
    return type;
  }, null);
  useEffect(() => {
    if (!data) return;
    if (data.type === 'floodgate') {
      getFloodgate(data.url)
        .then(setKif)
        .catch(console.error);
    }
    if (data.type === 'yomi') {
      getYomi(data.id)
        .then(setKif);
    }
  }, [data]);

  return (
    <>
      <Input dispatch={dispatch} />
      <Viewer kif={kif} />
    </>
  );
}
