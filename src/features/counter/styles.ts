import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& button': {
      marginLleft: '4px',
      marginRight: '8px',
    },
  },
  value: {
    fontSize: '78px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginTop: '2px',
    fontFamily: 'Courier New, Courier, monospace',
  },

  button: {
    fontSize: '32px',
    paddingLeft: '12px',
    paddingRight: '12px',
    outline: 'none',
    border: '2px solid transparent',
    color: 'rgb(112, 76, 182)',
    paddingBottom: '4px',
    cursor: 'pointer',
    backgroundColor: 'rgba(112, 76, 182, 0.1)',
    borderRadius: '2px',

    '&:hover': {
      border: '2px solid rgba(112, 76, 182, 0.4)',
    }
  },
  title: {
    textAlign: 'center',
  },
  }));