import {createContext, useContext, ReactNode, useState} from 'react';

interface LoginContextState {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialLoginContextState: LoginContextState = {
  login: false,
  setLogin: () => {},
};

export const LoginContext = createContext<LoginContextState>(
  initialLoginContextState,
);

export const LoginProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [login, setLogin] = useState(false);

  const loginContextValue: LoginContextState = {
    login,
    setLogin,
  };

  return (
    <LoginContext.Provider value={loginContextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};
