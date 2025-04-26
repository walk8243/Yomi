'use client';

import { useEffect, useState } from "react";
import Gui from './_shogi/gui';
import { initial } from './_shogi/utils/situation';
import { get, csaUrl } from "./_shogi/kif/floodgate";
import { Situation } from "./_shogi/utils/variable";

export default function Home() {
  const [kif, setKif] = useState<Situation[]>([{board: initial(), hands: null}]);
  useEffect(() => {
    get(csaUrl)
      .then(setKif);
  }, []);

  return (
    <Gui kif={kif} />
  );
}
