import React from 'react';
import { Container, Subscribe } from 'unstated';
import { CounterContainer, CounterState } from '../../../stores/unstated';
import { useStyles } from '../styles';

interface Counters extends Container<CounterState> {
  increment(): void,
  decrement(): void,
}

export const Counter = () => {
  const cx = useStyles();

  return (
    <Subscribe to={[CounterContainer]}>
      {(counter: Counters) => (
        <div>
          <h1 className={cx.title}>Unstated</h1>
          <div className={cx.row}>
            <button className={cx.button} data-cy="increment" onClick={() => counter.increment()}>+1</button>
              <span className={cx.value}>{counter.state.count}</span>
            <button className={cx.button} data-cy="decrement" onClick={() => counter.decrement()}>-1</button>
          </div>
        </div>
      )}
    </Subscribe>
  )
}