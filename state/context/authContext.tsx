import React, { createContext, useReducer } from 'react';
import authReducer from './authReducer';
interface StateType {
  user: string | null;
  dispatch?: any;
}
const InitialState: StateType = {
  user: null,
};

export const authContext = createContext(InitialState);

export const AuthContextprovider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, InitialState);
  return (
    <authContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
