'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Gui from './_shogi/gui';
import { initial } from './_shogi/utils/situation';
import styles from "./page.module.scss";
import { get, csaUrl } from "./_shogi/kif/floodgate";
import { Situation } from "./_shogi/utils/variable";

export default function Home() {
  const [kif, setKif] = useState<Situation[]>([{board: initial(), hands: null}]);
  useEffect(() => {
    get(csaUrl)
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

      <Gui kif={kif} />
    </>
  );
}
