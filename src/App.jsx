import React, { useState } from 'react';
import './App.css';
import Square from './Square';
import Result from './Result';

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

export default function App() {
  const [state, setState] = useState({
    player: CROSS,
    positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
  });

  function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;
    setState({
      player: state.player === CIRCLE ? CROSS : CIRCLE,
      positions: positions
    });
  }

  function reset() {
    setState({
      player: CROSS,
      positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
    });
  }

  function detectWinner(p) {
    if (p[0] === CIRCLE && p[1] === CIRCLE && p[2] === CIRCLE) return CIRCLE;
    if (p[3] === CIRCLE && p[4] === CIRCLE && p[5] === CIRCLE) return CIRCLE;
    if (p[6] === CIRCLE && p[7] === CIRCLE && p[8] === CIRCLE) return CIRCLE;

    if (p[0] === CIRCLE && p[3] === CIRCLE && p[6] === CIRCLE) return CIRCLE;
    if (p[1] === CIRCLE && p[4] === CIRCLE && p[7] === CIRCLE) return CIRCLE;
    if (p[2] === CIRCLE && p[5] === CIRCLE && p[8] === CIRCLE) return CIRCLE;

    if (p[0] === CIRCLE && p[4] === CIRCLE && p[8] === CIRCLE) return CIRCLE;
    if (p[2] === CIRCLE && p[4] === CIRCLE && p[6] === CIRCLE) return CIRCLE;

    if (p[0] === CROSS && p[1] === CROSS && p[2] === CROSS) return CROSS;
    if (p[3] === CROSS && p[4] === CROSS && p[5] === CROSS) return CROSS;
    if (p[6] === CROSS && p[7] === CROSS && p[8] === CROSS) return CROSS;

    if (p[0] === CROSS && p[3] === CROSS && p[6] === CROSS) return CROSS;
    if (p[1] === CROSS && p[4] === CROSS && p[7] === CROSS) return CROSS;
    if (p[2] === CROSS && p[5] === CROSS && p[8] === CROSS) return CROSS;

    if (p[0] === CROSS && p[4] === CROSS && p[8] === CROSS) return CROSS;
    if (p[2] === CROSS && p[4] === CROSS && p[6] === CROSS) return CROSS;

    if (p.every(position => position !== EMPTY)) return 'It is a tie';
  }

  const winner = detectWinner(state.positions);

  return (
    <div id='app'>
      <div className='gridbox'>
        <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
      {winner && <Result winner={winner} reset={reset} />}
    </div>
  );
}
