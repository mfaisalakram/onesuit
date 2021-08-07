import React, {createContext, useState} from "react";


export function LoginContextProvider (props){
    const [loginTokenContext, setLoginTokenContext] = useState('');

    return(
        <LoginContext.Provider value={{loginTokenContext, setLoginTokenContext }}>
            
            {
                props.children
            }
        </LoginContext.Provider>
    )
}

export const LoginContext = createContext({})

