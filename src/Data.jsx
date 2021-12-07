import { useEffect, useState } from 'react';

const Data = ({ socket }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    socket.on('data-update', (data) => {
      setPlayers((prevState) => [...prevState, data]);
    });
  }, [socket]);

  return (
    <div>
      <header className='listHeader'>
        <span>ID: </span>
        <span>First Name: </span>
        <span>Last Name: </span>
        <span>Nationality: </span>
      </header>
      <ul className='list'>
        {players.map((player, index) => {
          return (
            <li className='listItem' key={player.MSTID + index}>
              <span>{player.MSTID} </span>
              <span> {player.First} </span>
              <span> {player.Last} </span>
              <span> {player.Nationality} </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Data;
