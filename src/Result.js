import React from 'react';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

export default function Result({ winner, reset }) {
  return (
    <div className='result'>
      {winner === CIRCLE && 'circle won the game'}
      {winner === CROSS && 'cross won the game'}
      {winner === 'It is a tie' && 'it is a tie'}
      <button onClick={reset}> Reset </button>
    </div>
  );
}
