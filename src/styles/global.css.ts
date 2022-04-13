import { createGlobalTheme } from '@vanilla-extract/css';

export const themeVars = createGlobalTheme(':root', {
  colour: {
    brand: '#42b883',
    blue: 'blue',
    gray: 'gray',
    white: '#fff',
  },
  space: {
    none: '0',
    '1': '0.5rem',
  },
  borderRadius: {
    button: '25px',
    round: '100%',
  },
  fontFamily: {
    body: 'Avenir, Helvetica, Arial, sans-serif',
  },
  fontSize: {
    '1': '14px',
    '2': '18px',
  },
  lineHeight: {
    '1': '1.3',
    '2': '1.6',
  },
});
