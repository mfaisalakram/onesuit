import React, { createContext, useState } from 'react';

export function LoginContextProvider(props) {
  const [loginTokenContext, setLoginTokenContext] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  return (
    <LoginContext.Provider
      value={{
        loginTokenContext,
        setLoginTokenContext,
        pageTitle,
        setPageTitle,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export const LoginContext = createContext({});
