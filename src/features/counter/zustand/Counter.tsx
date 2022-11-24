import React from 'react';
import { useCounterStore, State } from '../../../stores/zustand';
import { useStyles } from '../styles';

export const Counter = () => {
  const counter = useCounterStore((state) => (state as State).counter);
  const increment = useCounterStore((state) => (state as State).increment);
  const decrement = useCounterStore((state) => (state as State).decrement);

  const cx = useStyles()

  return (
    <div>
      <h1 className={cx.title}>Zustand</h1>
      <div className={cx.row}>
        <button className={cx.button} data-cy="increment" onClick={() => increment()}>+1</button>
          <span className={cx.value}>{counter}</span>
        <button className={cx.button} data-cy="decrement" onClick={() => decrement()}>-1</button>
      </div>
    </div>
  )
};