"use client";
import io from 'socket.io-client';
import { createContext, useContext, ReactNode } from 'react';
import {SOCKET_URL} from '../config/default';
import { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';

export const SocketContext = createContext<{socket: Socket}>({socket: {} as Socket});

export function SocketsProvider({children}: {children: ReactNode}) {
    const [socket, setSocket] = useState<Socket>();
    useEffect(() => {
        const socketIo = io(SOCKET_URL!);
        socketIo.on('connect', () => {
            setSocket(socketIo);
          });
        
        // Cleanup
        return () => {
            socketIo.disconnect();
        };
    }, []);


    return (
    <SocketContext.Provider value={{socket: socket!}}>
        {children}
    </SocketContext.Provider>
    )
}

