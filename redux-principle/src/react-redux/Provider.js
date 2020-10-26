import React from 'react'

export const Context = React.createContext(null);

export const Provider = ({ store, children }) =>{
  return <Context.Provider value={store}>{children}</Context.Provider>
}
