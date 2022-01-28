import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { BOARD_CELLS } from './constants/commonConstant';
import { useEffect, useState } from 'react';
import { generatePlayers, getPlayerList } from './Service/playerService';
import Player from './components/Player';
import Dice from './components/Dice';
import { getRandomNumber } from './Service/diceService';

function App() {
  const [playerList, setPlayerList] = useState([]);
  const [diceNumber, setDiceNumber] = useState();
  const [playerTurn, setPlayerTurn] = useState();

  useEffect(() => {
    generatePlayers(1);
    setPlayerList(getPlayerList());
  }, []);

  const onDiceClick = () => {
    const randomNumber = getRandomNumber(6);
    updatePlayerPosition(randomNumber);
    setDiceNumber(randomNumber)
  };

  const updatePlayerPosition = (diceNumber) => {

    if (!playerList.length || !diceNumber) return;

    playerList[0].updatePositionBy(diceNumber);
    const cellElem = document.querySelector(`.cell[index="${playerList[0].getPosition()}"]`);
    if (!cellElem) return;

    playerList[0].updateTop(cellElem.offsetTop);
    playerList[0].updateLeft(cellElem.offsetLeft);
    setPlayerList([...playerList]);
  };
  

  return (
    <div className="App">
      <Board cellMatrix={BOARD_CELLS} />

      {
        playerList.map(val => <Player data={val} key={val.id} top={val.top} left={val.left} playerTurn={playerTurn} />)
      }

      <Dice randomNumber={diceNumber} onClick={onDiceClick} />
    </div>
  );
}

export default App;
