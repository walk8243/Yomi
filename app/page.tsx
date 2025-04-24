'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Kif from './_shogi/kif';
import { initial } from './_shogi/situation';
import styles from "./page.module.scss";
import { parseCsa, csaUrl } from "./_shogi/utils";
import { Situation } from "./_shogi/variable";

export default function Home() {
  const [kif, setKif] = useState<Situation[]>([{board: initial(), hands: null}]);
  useEffect(() => {
    parseCsa(csaUrl)
      .then(situations => { console.log(situations); return situations; })
      .then(setKif);
  }, []);

  return (
    <>
      <Image
        className={styles.logo}
        src="/yomi.png"
        alt="Yomi icon"
        width={180}
        height={185}
        priority
      />

      <Kif kif={kif} />
    </>
  );
}
