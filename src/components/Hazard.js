import React from 'react';
const YesNo = new Map([
  [true, 'YES 😱'],
  [false, 'nope 😎'],
]);

export default function Hazard({ yes }) {
  return <span className="hazard">{YesNo.get(yes)}</span>;
}
