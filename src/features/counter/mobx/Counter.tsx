import React from 'react';
import { observer } from 'mobx-react';
import store from '../../../stores/mobx/store';
import { useStyles } from '../styles';

export const Counter = observer(() => {
  const cx = useStyles();

  return (
    <div>
      <h1 className={cx.title}>MobX</h1>
      <div className={cx.row}>
        <button className={cx.button} data-cy="increment" onClick={() => store.increment()}>+1</button>
          <span className={cx.value}>{store.counter}</span>
        <button className={cx.button} data-cy="decrement" onClick={() => store.decrement()}>-1</button>
      </div>
    </div>
  )
}
);