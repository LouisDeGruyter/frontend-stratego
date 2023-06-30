'use client';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { SocketContext } from '@/context/socket.context';
import { CustomButton } from '@/components';
import {MessageType} from '@/types';

export default function chat() {
  const { socket } = useContext(SocketContext);
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    if (socket) {
      socket.on('receive_message', (data: MessageType) => {
        setMessageReceived(data.message);
        setMessages((prevMessages: MessageType[]) => [...prevMessages, data]);
      });
    }
  }, [socket]);

  const sendMessage = useCallback(() => {
    socket.emit('message', { message: message });
  }, [socket, message]);

  const setMessageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="chat">
      <div className="flex-1 pt-16 padding-x">
        {socket ? <p>id:{socket.id}</p> : <p>loading...</p>}
        {messages.map((msg, index) => (
          <p key={index}>{msg.message} from {msg.sender} at {msg.timestamp}</p>
        ))}
        <div className="flex" id="inputChat">
          <input
            type="text"
            placeholder="Enter your message"
            onChange={setMessageInput}
          />
          <CustomButton
            title="Send"
            handleClick={sendMessage}
            containerStyles="bg-primary-blue text-white rounded-full p-0"
          />
        </div>
      </div>
    </div>
  );
}
