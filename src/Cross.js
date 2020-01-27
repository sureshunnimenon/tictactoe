import React from 'react';

export default function Cross() {
  return (
    /* <>
      <h4> Cross component</h4>
    </> */
    <svg className='cross' width='100' height='100' viewBox='-50 -50 100 100'>
      <line x1='-40' y1='-40' x2='40' y2='40'></line>
      <line x1='-40' y1='40' x2='40' y2='-40'></line>
    </svg>
  );
}
