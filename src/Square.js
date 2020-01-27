import React from 'react';
import Circle from './Circle';
import Cross from './Cross';

const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';
const EMPTY = 'EMPTY';

export default function Square({ position, value, takeTurn }) {
  function handleClick() {
    if (value === EMPTY) takeTurn(position);
  }
  return (
    <div className='square' onClick={handleClick}>
      {/* <h2> {position} </h2> <span> {value}</span> */}

      {value === CIRCLE && <Circle />}
      {value === CROSS && <Cross />}
    </div>
  );
}
