import React from 'react';
import { useStore } from 'effector-react';
import { counterState, increment, decrement } from '../../../stores/effector';
import { useStyles } from '../styles';

export const Counter = () => {
  const counter = useStore(counterState);

  const cx = useStyles();

  return (
    <div>
      <h1 className={cx.title}>Effector</h1>
      <div className={cx.row}>
        <button className={cx.button} data-cy="increment" onClick={() => increment()}>+1</button>
          <span className={cx.value}>{counter}</span>
        <button className={cx.button} data-cy="decrement" onClick={() => decrement()}>-1</button>
      </div>
    </div>
  )
}