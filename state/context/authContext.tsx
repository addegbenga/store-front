import React, { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import authReducer from './authReducer';

interface StateType {
  user: string | null | any;
  // Todo: add type safety for dispatch
  dispatch?: any;
}
const ISSERVER = typeof window === 'undefined';

const InitialState: StateType = {
  user: null,
};

export const authContext = createContext(InitialState);

export const AuthContextprovider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, InitialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);
  return (
    <authContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
