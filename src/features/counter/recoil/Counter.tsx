import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../../../stores/recoil/store';
import { useStyles } from '../styles';

export const Counter = () => {
  const [counter, setCouter] = useRecoilState(counterState);

  const cx = useStyles();
  
  return (
    <div>
      <h1 className={cx.title}>Recoil</h1>
      <div className={cx.row}>
        <button className={cx.button} data-cy="increment" onClick={() => setCouter((counter) => counter + 1)}>+1</button>
          <span className={cx.value}>{counter}</span>
        <button className={cx.button} data-cy="decrement" onClick={() => setCouter((counter) => counter - 1)}>-1</button>
      </div>
    </div>
  );
}
;