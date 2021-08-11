import React, { createContext, useState } from 'react';

export function LoginContextProvider(props) {
  const [loginTokenContext, setLoginTokenContext] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [ticketManager, setTicketManager] = useState(true);

  return (
    <LoginContext.Provider
      value={{
        loginTokenContext,
        setLoginTokenContext,
        pageTitle,
        setPageTitle,
        ticketManager,
        setTicketManager,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export const LoginContext = createContext({});
