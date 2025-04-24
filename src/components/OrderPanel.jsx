import React from 'react';

function OrderPanel({ onOrder }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => onOrder('buy')} style={{ marginRight: '1rem' }}>做多</button>
      <button onClick={() => onOrder('sell')}>做空</button>
    </div>
  );
}

export default OrderPanel;
