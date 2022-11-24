import { Link } from "react-router-dom";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    '& li': {
      marginRight: '16px',
    }
  }
}));

export const Navbar = () => {
  const cx = useStyles();

  return (
    <nav>
      <ul className={cx.navbar}>
        <li>
          <Link to="/redux-toolkit">Redux Toolkit</Link>
        </li>
        <li>
          <Link to="/mobx">MobX</Link>
        </li>
        <li>
          <Link to="/recoil">Recoil</Link>
        </li>
        <li>
          <Link to="/effector">Effector</Link>
        </li>
        <li>
          <Link to="/unstated">Unstated</Link>
        </li>
        <li>
          <Link to="/zustand">Zustand</Link>
        </li>
      </ul>
    </nav>
  )
  }
;

export default Navbar;