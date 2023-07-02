"use client";
import React,{ReactNode,useEffect,useState,useContext,createContext} from 'react';
import { onAuthStateChanged,getAuth,} from 'firebase/auth';
import {firebase_app} from '@/firebase/config';
import { User } from 'firebase/auth';
const auth = getAuth(firebase_app);

export const AuthContext = createContext<{user: User}>({user: {} as User});

export const useAuthContext = () => useContext(AuthContext);


export function AuthContextProvider  ({ children} :{children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      }, [])

    return (
        <AuthContext.Provider value={{ user:user! }}>
            {!loading &&children}
        </AuthContext.Provider>
    );
};