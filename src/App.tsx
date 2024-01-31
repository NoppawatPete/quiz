import React, { useState, useEffect } from 'react';
import Question from './Question';
import Leaderboard from './Leaderboard';

const App: React.FC = () => {
  return (
    <div>
      <Leaderboard />
      <Question />
    </div>
  );
};

export default App;