import React, { useState, useEffect } from 'react';
import Question from './Question';
import Leaderboard from './Leaderboard';
import { IScore } from './types';

const listScoreKey = 'listScore';
const App: React.FC = () => {
  const [scoreBoard, setScoreBoard] = useState<IScore[]>(() => {
    const storedScoreboard = localStorage.getItem(listScoreKey);
    return storedScoreboard ? JSON.parse(storedScoreboard) : [];
  });

  const handleScore = (score: number, name: string) => {
    const updatedScoreBoard = [...scoreBoard, { name: name, score: score }];
    updatedScoreBoard.sort((a, b) => b.score - a.score);
    setScoreBoard(updatedScoreBoard);

    localStorage.setItem(listScoreKey, JSON.stringify(updatedScoreBoard));
  };

  return (
    <div className='content'>
      <Leaderboard scores={scoreBoard} />
      <Question handleScore={handleScore} />
    </div>
  );
};

export default App;