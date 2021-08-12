import React, { createContext, useState } from 'react';

export function LoginContextProvider(props) {
  const [loginTokenContext, setLoginTokenContext] = useState('');

  const [pageTitle, setPageTitle] = useState('');

  const [userBoxData, setUserBoxData] = useState({});

  return (
    <LoginContext.Provider
      value={{
        loginTokenContext,
        setLoginTokenContext,
        pageTitle,
        setPageTitle,
        userBoxData,
        setUserBoxData,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export const LoginContext = createContext({});
