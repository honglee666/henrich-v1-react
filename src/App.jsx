import React, { useState } from 'react';
import Balance from './components/Balance';
import PriceFeed from './components/PriceFeed';
import OrderPanel from './components/OrderPanel';
import PositionPanel from './components/PositionPanel';

function App() {
  const [balance, setBalance] = useState(10000); // 已平倉結算金
  const [price, setPrice] = useState(1990);      // 報價
  const [positions, setPositions] = useState([]); // 所有持倉紀錄

  // 下單
  const handleOrder = (direction) => {
    const newPosition = {
      id: Date.now(),
      direction,
      entryPrice: parseFloat(price),
    };
    setPositions([...positions, newPosition]);
  };

  // 平倉
  const handleClose = (id) => {
    const pos = positions.find(p => p.id === id);
    const direction = pos.direction === 'buy' ? 1 : -1;
    const pnl = ((price - pos.entryPrice) * direction * 100).toFixed(2); // 倍數為100
    setBalance(prev => (parseFloat(prev) + parseFloat(pnl)).toFixed(2));
    setPositions(positions.filter(p => p.id !== id));
  };

  // 即時總資產顯示（包含未平倉損益）
  const currentValue = (
    parseFloat(balance) +
    positions.reduce((acc, pos) => {
      const direction = pos.direction === 'buy' ? 1 : -1;
      const pnl = (price - pos.entryPrice) * direction * 100;
      return acc + pnl;
    }, 0)
  ).toFixed(2);

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Henrich V1 模擬平台</h1>
      <Balance balance={currentValue} />
      <PriceFeed price={price} setPrice={setPrice} />
      <OrderPanel onOrder={handleOrder} />
      <PositionPanel positions={positions} price={price} onClose={handleClose} />
    </div>
  );
}

export default App;
