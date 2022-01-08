import React, { useState } from 'react'


export const AuthContext = React.createContext();

function AuthContextProvider({children}){
    const [Auth, setAuth] = useState(false);

    const handleSignIn = ({email, password}) => {
        // menage sign in
        if(!Auth){
            // handle Logic
            setAuth(true);
        }
        else{
            // Already signed in
            return true;
        }
    }



const handleSignOut = () => {
    // Manage sign out
    if(Auth){
        setAuth(false);
    }
    else{
        // already signed out
        return false;
    }
}

const IsSignIn = () => {
    return Auth;
}

const value = [Auth, { handleSignIn,handleSignOut,IsSignIn}];

return <AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>




}

export default AuthContextProvider;