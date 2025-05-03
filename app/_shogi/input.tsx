import { ChangeEvent, Dispatch, useRef, useState } from "react";
import { csaUrl } from './kif/floodgate';
import styles from './input.module.scss';

export default function Input({ dispatch }: Readonly<{ dispatch: Dispatch<InputDataType> }>) {
  const [type, setType] = useState<InputDataType['type']>('floodgate');
  const floodgateUrlRef = useRef<HTMLInputElement>(null);
  const yomiRef = useRef<HTMLSelectElement>(null);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value !== 'floodgate' && value !== 'yomi') return;
    setType(value);
  };
  const handleSubmit = () => {
    if (type === 'floodgate' && floodgateUrlRef.current) {
      dispatch({ type: 'floodgate', url: floodgateUrlRef.current.value });
    }
    if (type === 'yomi' && yomiRef.current) {
      dispatch({ type: 'yomi', id: yomiRef.current.value });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.type}>
        <select value={type} onChange={handleChange}>
          <option value='floodgate'>floodgate</option>
          <option value='yomi'>Yomi</option>
        </select>
      </div>
      <div className={styles.input}>
        <input type="text"
          hidden={type !== 'floodgate'}
          placeholder={csaUrl}
          ref={floodgateUrlRef}
        />
        <select
          hidden={type !== 'yomi'}
          ref={yomiRef}
        >
          <option value="1">2025.04.09 第83期名人戦 藤井聡太名人 vs 永瀬拓矢九段</option>
        </select>
      </div>
      <div className={styles.action}>
        <button onClick={handleSubmit}>読み込む</button>
      </div>
    </section>
  )
}

type FloodgateInputData = {
  type: 'floodgate',
  url: string,
}
type YomiInputData = {
  type: 'yomi',
  id: string,
}
export type InputDataType = FloodgateInputData | YomiInputData;
