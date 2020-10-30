import { createContext, useContext } from 'react';

const WebpackContext = createContext();

export function useWebpackContext() {
  return useContext(WebpackContext);
}

export default function WebpackProvider({ children }) {
  return (
    <WebpackContext.Provider value="Hello from Webpack 5">
      {children}
    </WebpackContext.Provider>
  );
}
