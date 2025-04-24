import React from 'react';

function PositionPanel({ positions, price, onClose }) {
  return (
    <div>
      <h3>當前持倉：</h3>
      {positions.map(pos => {
        const direction = pos.direction === 'buy' ? 1 : -1;
        const pnl = ((price - pos.entryPrice) * direction).toFixed(2);
        return (
          <div key={pos.id} style={{ border: '1px solid #ccc', padding: '0.5rem', marginBottom: '0.5rem' }}>
            <div>方向：{pos.direction === 'buy' ? '做多' : '做空'}</div>
            <div>入場價：${pos.entryPrice}</div>
            <div>即時報價：${price}</div>
            <div>浮盈虧：{pnl}</div>
            <button onClick={() => onClose(pos.id)}>平倉</button>
          </div>
        );
      })}
    </div>
  );
}

export default PositionPanel;
