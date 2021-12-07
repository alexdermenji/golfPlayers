import { useState, useEffect } from 'react';
import './App.css';
import { io } from 'socket.io-client';
import Data from './Data';

function App() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`https://mst-full-stack-dev-test.herokuapp.com/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className='App'>
      <header className='App-header'>Golf players 🏌️‍♂️</header>
      {socket ? (
        <Data socket={socket} />
      ) : (
        <div>There are no registered players yet</div>
      )}
    </div>
  );
}

export default App;
