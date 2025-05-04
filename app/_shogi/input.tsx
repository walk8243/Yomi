import { ChangeEvent, Dispatch, useRef, useState } from "react";
import styles from './input.module.scss';

export default function Input({ dispatch }: Readonly<{ dispatch: Dispatch<InputDataType> }>) {
  const [type, setType] = useState<InputDataType['type']>('yomi');
  const yomiRef = useRef<HTMLSelectElement>(null);
  const localFileRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value !== 'yomi' && value !== 'local') return;
    setType(value);
  };
  const handleSubmit = () => {
    if (type === 'yomi' && yomiRef.current) {
      dispatch({ type: 'yomi', id: yomiRef.current.value });
    }
    if (type === 'local' && localFileRef.current) {
      const file = localFileRef.current.files?.[0];
      if (file) {
        dispatch({ type: 'local', file });
      }
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.type}>
        <select value={type} onChange={handleChange}>
          <option value='yomi'>Yomi</option>
          <option value='local'>local</option>
        </select>
      </div>
      <div className={styles.input}>
        <select
          hidden={type !== 'yomi'}
          ref={yomiRef}
        >
          <option value="1">2025.04.09 第83期名人戦 藤井聡太名人 vs 永瀬拓矢九段</option>
        </select>
        <input type="file"
          hidden={type !== 'local'}
          ref={localFileRef}
          accept=".csa"
        />
      </div>
      <div className={styles.action}>
        <button onClick={handleSubmit}>読み込む</button>
      </div>
    </section>
  )
}

type YomiInputData = {
  type: 'yomi',
  id: string,
}
type LocalInputData = {
  type: 'local',
  file: File,
}
export type InputDataType = YomiInputData | LocalInputData;
