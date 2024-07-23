import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    console.log("Adress: ", import.meta.env)
    const newSocket = io("" + import.meta.env.VITE_SERVER_HOST, { transports: ['websocket', 'polling', 'flashsocket'] });
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  return socket;
};

export default useSocket;
