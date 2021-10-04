import { createContext } from 'react';

const Context = createContext({
  themeDark: false,
  setThemeDark: () => {},
});

export default Context;
