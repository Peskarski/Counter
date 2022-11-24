
import { useAppSelector, useAppDispatch } from '../../../stores/redux-toolkit/hooks';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import { useStyles } from '../styles';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const cx = useStyles();

  return (
    <div>
      <h1 className={cx.title}>Redux Toolkit</h1>
      <div className={cx.row}>
        <button
          className={cx.button}
          onClick={() => dispatch(decrement())}
          data-cy="decrement"
        >
          -
        </button>
        <span className={cx.value}>{count}</span>
        <button
          className={cx.button}
          onClick={() => dispatch(increment())}
          data-cy="increment"
        >
          +
        </button>
      </div>
    </div>
  );
}
