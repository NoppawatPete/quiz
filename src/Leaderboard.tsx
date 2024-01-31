import React from 'react';

interface LeaderboardProps {
  scores: { name: string; score: number }[];
}

const Leaderboard: React.FC = () => {
    return (
        <div>
            <h2>Leaderboard</h2>
            {/* <ol>
                {scores.map((player, index) => (
                <li key={index}>
                    {player.name}: {player.score}
                </li>
                ))}
            </ol> */}
        </div>
    );
};

export default Leaderboard;