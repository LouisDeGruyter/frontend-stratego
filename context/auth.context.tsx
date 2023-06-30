"use client";
import React,{ReactNode} from 'react';
import { onAuthStateChanged,getAuth,} from 'firebase/auth';
import {firebase_app} from '@/firebase/config';
import { User } from 'firebase/auth';
const auth = getAuth(firebase_app);

export const AuthContext = React.createContext<{user: User}>({user: {} as User});

export const useAuthContext = () => React.useContext(AuthContext);


export function AuthContextProvider  ({ children} :{children: ReactNode}) {
    const [user, setUser] = React.useState<User | null>(null);
   

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user:user! }}>
            {children}
        </AuthContext.Provider>
    );
};