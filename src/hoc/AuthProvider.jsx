import {useState, createContext} from 'react'


export const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);

      const signIn = (newUser, cb) =>{
        setUser(newUser);
        cb();
    }
    const singOut = (cb) =>{
        setUser(null);
        cb();
    }

    const value = {user, signIn, singOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}