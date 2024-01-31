import React from 'react';
import { IScore } from './types';

interface LeaderboardProps {
  scores: IScore[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
    return (
        <div className='leaderboard'>
            <h2>Leaderboard</h2>
            <ol>
                {scores.map((player, index) => (
                <li key={index}>
                    {player.name}: {player.score}
                </li>
                ))}
            </ol>
        </div>
    );
};

export default Leaderboard;